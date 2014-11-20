PushAlarm = function(options){
	var self = this;
	self.hour = options.hour;
	self.min = options.min;
	self.pushId = options.pushId;
	self.userId = options.userId;
	self.rule = new schedule.RecurrenceRule();
	self.rule.dayOfWeek = [0, new schedule.Range(1, 6)]; //[0,1,2,3,4,5,6];
	self.rule.hour = Number(options.hour);
	self.rule.minute = Number(options.min);
	self.onPushDay = function(){
		console.log("onPushDay " +self.pushId);
		if(self.pushId)
			app.sendpushtouser(self.pushId);
		//console.log(self);
	}
	self.job = schedule.scheduleJob(self.rule, self.onPushDay);

	return self;
}

app.setAlarm = function(options){
	var pushAlarm = new PushAlarm(options)
	return true;
};