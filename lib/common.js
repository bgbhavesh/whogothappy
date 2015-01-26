Log = new Meteor.Collection("Log");
Language = new Meteor.Collection("language");
Cases = new Meteor.Collection("cases");

app.insertLanguage = function (insert) {
    // console.log(insert._id);
    var language = Language.findOne({"_id": insert._id});

    insert.modifiedAt = new Date().getTime();

    if (language) {
        delete insert._id;
        insert.modifiedAt = new Date().getTime();
        Language.update({"_id": language._id}, {$set: insert});
    }
    else {
        insert.createdAt = new Date().getTime();
        Language.insert(insert);
    }
}

app.insertCases = function (insert) {
    var cases = Cases.findOne({"_id": insert._id});
    if (cases) {
        delete insert._id;
        insert.modifiedAt = new Date().getTime();
        Cases.update({"_id": cases._id}, {$set: insert});
    }
    else {
        insert.createdAt = new Date().getTime();
        Cases.insert(insert);
    }
}