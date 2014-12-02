Template.weeks.helpers({
    
    d0 : function(){
        return Streak.findOne({"day": 0});
    },
    d1 : function(){
        return Streak.findOne({"day": 1});
    },
    d2 : function(){
        return Streak.findOne({"day": 2});
    },
    d3 : function(){
        return Streak.findOne({"day": 3});
    },
    d4 : function(){
        return Streak.findOne({"day": 4});
    },
    d5 : function(){
        return Streak.findOne({"day": 5});
    },
    d6 : function(){
        return Streak.findOne({"day": 6});
    }
    // "lang" : function(){
    //     return 
    // }
})

var day = [app.lang.table.d0,app.lang.table.d1,app.lang.table.d2,app.lang.table.d3,app.lang.table.d4,app.lang.table.d5,app.lang.table.d6]
app.arrangeDays = function(){

	var d = new Date();
    var n = d.getDay();

	$("#weeks thead tr").html("");
	$("#weeks thead tr").append("<th>"+app.lang.table.week+"</th>");

	for (var i = n+1; i <= 6; i++) {
		$("#weeks thead tr").append("<th>"+day[i]+"</th>");	// 			app.lang.table.d0
	};
	for (var i = 0; i < n+1; i++) {
		$("#weeks thead tr").append("<th>"+day[i]+"</th>");	
	};
/*************************header is done ************************************/
	$("#weeks tbody .endgame1").html("");
	$("#weeks tbody .endgame1").append("<th>"+app.lang.table.col1+"</th>");
	for (var i = n+1; i <= 6; i++) {
		var c, v;
		c = "grey";
		v = '<i class="fa fa-frown-o"></i>';
		if(Streak.findOne({"day": i})){
			if(Streak.findOne({"day": i}).endgame1){
				c = "black";
			}
			if(Streak.findOne({"day": i}).first){
				v = '<i class="fa fa-smile-o"></i>';
			}
		}
		$("#weeks tbody .endgame1").append('<td class="'+c+'">'+v+'</td>');	
	};
	for (var i = 0; i < n+1; i++) {
		var c, v;
		c = "grey";
		v = '<i class="fa fa-frown-o"></i>';
		if(Streak.findOne({"day": i})){
			if(Streak.findOne({"day": i}).endgame1){
				c = "black";
			}
			if(Streak.findOne({"day": i}).first){
				v = '<i class="fa fa-smile-o"></i>';
			}
		}
		$("#weeks tbody .endgame1").append('<td class="'+c+'">'+v+'</td>');	
	};

/*************************AM is done ************************************/
	$("#weeks tbody .endgame2").html("");
	$("#weeks tbody .endgame2").append("<th>"+app.lang.table.col2+"</th>");
	for (var i = n+1; i <= 6; i++) {
		var c, v;
		c = "grey";
		v = '<i class="fa fa-frown-o"></i>';
		if(Streak.findOne({"day": i})){
			if(Streak.findOne({"day": i}).endgame2){
				c = "black";
			}
			if(Streak.findOne({"day": i}).second){
				v = '<i class="fa fa-smile-o"></i>';
			}
		}
		$("#weeks tbody .endgame2").append('<td class="'+c+'">'+v+'</td>');	
	};
	for (var i = 0; i < n+1; i++) {
		var c, v;
		c = "grey";
		v = '<i class="fa fa-frown-o"></i>';
		if(Streak.findOne({"day": i})){
			if(Streak.findOne({"day": i}).endgame2){
				c = "black";
			}
			if(Streak.findOne({"day": i}).second){
				v = '<i class="fa fa-smile-o"></i>';
			}
		}
		$("#weeks tbody .endgame2").append('<td class="'+c+'">'+v+'</td>');	
	};
}

Template.weeks.rendered = app.arrangeDays; 
