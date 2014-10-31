app.getTextAreaEmails = function(){
	var emails = $("#getEmails").val();
	var res = emails.split(",");
	// var emailIdsemails;
	// for (i=0;li=res.length,i<li;i++){
	// 	emailIdsemails = res[0].split(" ");
	// }
	// console.log(emailIdsemails);
	return(res);
}
