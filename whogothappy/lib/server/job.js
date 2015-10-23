Job = function(){
};
Job.prototype.jobs = [];
Job.prototype.currentJob = function(options){
	var self = this;
	self._id = options._id;
	self.data = options.data;
	self.set = {};
	self.callback = options.callback;
	self.status = "active";
	self.limit = options.limit;
	self.myCallback = function(){
		var nowDate = new Date().getTime();
		console.log(self);
		if(self.limit.name == "date"){
			var thenDate = new Date(self.limit.value).getTime();
			if(thenDate < nowDate){
				console.log("Date expired!!");
				Job.removeJob(self._id);
				return ;
			}
		}
		self.callback(self.data);
	}
	if(typeof options.date != "number"){
		var nowDate = new Date().getTime();
		var thenDate = new Date(options.date).getTime();
		if(thenDate < nowDate && !options.hour){
			console.log("Please add a future date!!");
			return;
		}
		self.set._id = Meteor.setTimeout(self.myCallback,thenDate - nowDate);
		self.set.type = "timeout";
	}
	else{
		self.set._id = Meteor.setInterval(self.myCallback,options.date * 1000);
		self.set.type = "interval";	
	}
	return self;
}
Job.prototype.addJob = function(options){
	var currentJob = new Job.currentJob(options);
	Job.jobs.push(currentJob);
}

Job.prototype.removeJob = function(jobId){
	var currentJob = null;
	for(var i=0,il=Job.jobs.length;i<il;i++){
		currentJob = Job.jobs[i];
		if(currentJob._id == jobId && currentJob.status == "active"){
			if(currentJob.set.type == "timeout"){
				currentJob.status = "inactive";
				Meteor.clearTimeout(currentJob.set._id);
			}
			else{
				Meteor.clearInterval(currentJob.set._id);	
			}
			return true;
		}
	}
	return false;
}