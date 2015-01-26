PushAlarm = function (options) {
    app.cancelAlarm(options._id);

    var self = this;
    self.hour = options.hour;
    self.min = options.min;
    self.pushId = options.pushId;
    self.userId = options.userId;
    self.rule = new schedule.RecurrenceRule();
    self.rule.dayOfWeek = [0, new schedule.Range(1, 6)]; //[0,1,2,3,4,5,6];
    self.rule.hour = Number(options.hour);
    self.rule.minute = Number(options.min);

    self.onPushDay = function () {
        console.log("onPushDay " + self.pushId);
        // console.log(self);
        if (self.pushId)
            app.sendpushtouser(self.pushId);
        // console.log(self);
    }
    // console.log(self);
    self.job = schedule.scheduleJob(self.rule, self.onPushDay);
    return self;
}

PushAlarm.prototype.cancel = function () {
    try {
        if (typeof self != undefined) {
            self.job.cancel();
            delete self;
            return true;
        }
    }
    catch (err) {
        return false;
    }
};

app.AlarmArray = {};
app.setAlarm = function (options) {
    app.AlarmArray[options._id] = new PushAlarm(options)
    return true;
};
app.cancelAlarm = function (alarmId) {
    var pushAlarm = app.AlarmArray[alarmId];
    if (pushAlarm) {
        pushAlarm.cancel();
        delete app.AlarmArray[alarmId];
        return true;
    }
    else
        return false;
}
app.restoreAlarm = function () {
    Meteor.users.find({}).forEach(function (user) {
        try {
            if (user && user.profile && user.profile.alarm) {
                if (user.profile.alarm.first)
                    app.setAlarm(user.profile.alarm.first);
                if (user.profile.alarm.second)
                    app.setAlarm(user.profile.alarm.second);
            }
        }
        catch (err) {
        }
    });
}

Meteor.startup(function () {
    app.restoreAlarm();
});

Meteor.methods({
    "setAlarm": function (options) {
        // console.log("setAlarm started");
        if (!Meteor.userId()) {
            console.log("not a user");
            return;
        }

        options._id = Random.id();
        try {
            options.userId = Meteor.userId();
        } catch (err) {
        }

        var user = Meteor.user();
        if (user && user.profile) {
            if (user.profile.alarm) {
                if (user.profile.alarm.first)
                    app.cancelAlarm(user.profile.alarm.first._id);
                if (user.profile.alarm.second)
                    app.cancelAlarm(user.profile.alarm.second._id);
            }
            options.pushId = user.profile.pushId;
        }
        app.setAlarm(options);
        var update = {};
        update["profile.alarm." + options.type] = options;
        Meteor.users.update({"_id": Meteor.userId()}, {$set: update});
        // console.log(update);
        // console.log("setAlarm ended");
        return true;
    },
    "cancelAlarm": function (alarmId) {
        return app.cancelAlarm(alarmId);
    }
});