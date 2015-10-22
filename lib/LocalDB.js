function _insert(){

}
LocalDB = function(){
	var self = this;
	self.collectionList = [];
	self.database = {};
}
LocalDB.prototype.addCollection = function(options){
	if(typeof options.collection == "string")
		options.collection = window[options.collectionName];

	if(!options.firstQuery)
		options.firstQuery = {};

	if(!options.secondQuery)
		options.secondQuery = {};

	self.collectionList.push(options);
}


LocalDB.prototype.saveCollection = function() {
	if (!self.database)
        self.database = {};

    for(var i=0,il=self.collectionList.length;i<il;i++){
    	self.saveIndividual(self.collectionList[i]);
    }

    if (!evertimeFlag)
        self.saveOutstanding();
}

LocalDB.prototype.restoreCollection = function() {
	console.log(self);
    self.database = window.localStorage.getItem("LocalDB");
    if (self.database)
        self.database = EJSON.parse(database);

    for(var i=0,il=self.collectionList.length;i<il;i++){
    	self.restoreIndividual(self.collectionList[i]);
    }

    setTimeout(self.restoreOutstanding, 20000);
}
LocalDB.prototype.saveIndividual = function(options) {
    var cursor = options.collection.find({});
    self.database[options.collectionName] = new Array();
    cursor.forEach(function(data) {
        self.database[options.collectionName].push(data._id);
        data.cache = true;
        window.localStorage.setItem(data._id, EJSON.stringify(data));
    });
    window.localStorage.setItem("LocalDB", EJSON.stringify(self.database));
}

LocalDB.prototype.saveOutstanding = function() {
    var starttimer = new Date().getTime();
    if (Meteor.connection._anyMethodsAreOutstanding()) {
        var methods = Meteor.connection._methodInvokers;
        var methodJson = {};
        methodJson.method = [];
        if (methods) {
            $.each(methods, function(key, data) {
                // console.log(data.)
                methodJson.method.push({
                    "method": data._message.method,
                    "args": data._message.params,
                    "options": data._wait
                });
            })
        }
        window.localStorage.setItem("LocalDB_Methods", EJSON.stringify(methodJson));
    }
}


LocalDB.prototype.restoreIndividual = function(options) {
    var oldCollectionArray = [];
    if (self.database) {
        var databaseFollow = self.database[options.collectionName];
        if (databaseFollow) {
            var followCollection = null;
            if (databaseFollow) {
                for (var i = 0, il = databaseFollow.length; i < il; i++) {
                    if (databaseFollow[i] && options.collection) {
                        var cursorFollow = options.collection._collection.findOne({
                            "_id": databaseFollow[i]
                        });
                        if (!cursorFollow) {
                            oldCollectionArray.push(databaseFollow[i]);
                            followCollection = window.localStorage.getItem(databaseFollow[i]);
                            followCollection = EJSON.parse(followCollection);
                            options.collection._collection.insert(followCollection);
                        }
                    }
                }
            }
        }
    }
}
LocalDB.prototype.restoreOutstanding = function() {
    var starttimer = new Date().getTime();
    try {
        var methodJson = window.localStorage.getItem("LocalDB_Methods");
        if (!methodJson)
            return;
        methodJson = EJSON.parse(methodJson);
        if (methodJson)
            methods = methodJson.method;
        if (methods) {
            for (var i = 0, il = methods.length; i < il; i++) {
                Meteor.connection.apply(methods[i].method, methods[i].args, methods[i].options);
            }
        }
    } catch (error) {
        console.log(error)
    }
}