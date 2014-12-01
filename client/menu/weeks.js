app.arrangeDays = function(){

	var d = new Date();
    var n = d.getDay();


	$("#weeks thead tr").html("");

	for (var i = n; i <= 6; i++) {
		$("#weeks thead tr").prepend("<th>"+i+"</th>");	
	};
	for (var i = 0; i < n; i++) {
		$("#weeks thead tr").prepend("<th>"+i+"</th>");	
	};
	$("#weeks thead tr").prepend("<th>"+app.lang.table.week+"</th>");
/*************************header is done ************************************/
	$("#weeks tbody .endgame1").html("");
	for (var i = n; i <= 6; i++) {
		var c, v;
		c = "grey";
		v = "o";
		if(Streak.findOne({"day": i})){
			if(Streak.findOne({"day": i}).endgame1){
				c = "black";
			}
			if(Streak.findOne({"day": i}).first){
				v = "x";
			}
		}
		// console.log(Streak.findOne({"day": i}).endgame1);
		$("#weeks tbody .endgame1").prepend('<td class="'+c+'">'+v+'</td>');	
	};
	for (var i = 0; i < n; i++) {
		var c, v;
		c = "grey";
		v = "o";
		if(Streak.findOne({"day": i})){
			if(Streak.findOne({"day": i}).endgame1){
				c = "black";
			}
			if(Streak.findOne({"day": i}).first){
				v = "x";
			}
		}
		// console.log(Streak.findOne({"day": i}).endgame1);
		$("#weeks tbody .endgame1").prepend('<td class="'+c+'">'+v+'</td>');	
	};
	$("#weeks tbody .endgame1").prepend("<th>"+app.lang.table.col1+"</th>");

/*************************AM is done ************************************/
	$("#weeks tbody .endgame2").html("");
	for (var i = n; i <= 6; i++) {
		var c, v;
		c = "grey";
		v = "o";
		if(Streak.findOne({"day": i})){
			if(Streak.findOne({"day": i}).endgame2){
				c = "black";
			}
			if(Streak.findOne({"day": i}).second){
				v = "x";
			}
		}
		$("#weeks tbody .endgame2").prepend('<td class="'+c+'">'+v+'</td>');	
		// console.log(Streak.findOne({"day": i}).endgame2);
	// 	$("#weeks tbody .endgame2").append('<td class="{{#if d'+i+'.endgame2}} black {{else}} grey {{/if}}">{{#if d'+i+'.second}} x {{else}} o {{/if}}</td>');
	};
	for (var i = 0; i < n; i++) {
		var c, v;
		c = "grey";
		v = "o";
		if(Streak.findOne({"day": i})){
			if(Streak.findOne({"day": i}).endgame2){
				c = "black";
			}
			if(Streak.findOne({"day": i}).second){
				v = "x";
			}
		}
		$("#weeks tbody .endgame2").prepend('<td class="'+c+'">'+v+'</td>');	
		// console.log(Streak.findOne({"day": i}).endgame2);
	// 	$("#weeks tbody .endgame2").append('<td class="{{#if d'+i+'.endgame2}} black {{else}} grey {{/if}}">{{#if d'+i+'.second}} x {{else}} o {{/if}}</td>');
	};
	$("#weeks tbody .endgame2").prepend("<th>"+app.lang.table.col2+"</th>");
} 