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

	$("#weeks tbody .endgame1").html("");
	$("#weeks tbofordy .endgame1").append("<th>"+app.lang.table.col1+"</th>");
	// for (var i = n; i <= 6; i++) {
	// 	console.log("d"+i);

	// 	$("#weeks tbofordy .endgame1").append('<td class="{{#if d'+i+'.endgame1}} black {{else}} grey {{/if}}">{{#if d'+i+'.first}} x {{else}} o {{/if}}</td>');	
	// };
	// for (var i = 0; i < n; i++) {
	// 	$("#weeks tbofordy .endgame1").append('<td class="{{#if d'+i+'.endgame1}} black {{else}} grey {{/if}}">{{#if d'+i+'.first}} x {{else}} o {{/if}}</td>');	
	// };

	$("#weeks tbody .endgame2").html("");
	$("#weeks tbody .endgame2").append("<th>"+app.lang.table.col2+"</th>");
	// for (var i = n; i <= 6; i++) {
	// 	$("#weeks tbody .endgame2").append('<td class="{{#if d'+i+'.endgame2}} black {{else}} grey {{/if}}">{{#if d'+i+'.second}} x {{else}} o {{/if}}</td>');
	// };
	// for (var i = 0; i < n; i++) {
	// 	$("#weeks tbody .endgame2").append('<td class="{{#if d'+i+'.endgame2}} black {{else}} grey {{/if}}">{{#if d'+i+'.second}} x {{else}} o {{/if}}</td>');
	// };
} 