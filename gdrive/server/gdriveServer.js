
Meteor.startup(function(){
	var my_sheet = new GoogleSpreadsheet('1Sn3TQLUaILVjp5KMy1cvDsfaH3ISUtkHAUg7VmMsAj8');

	my_sheet.getRows( 1, function(err, row_data){
		// console.log(row_data[1].hi1);
		// console.log(row_data[1].hello1);
		for(var i=0,il=row_data.length;i<il;i++){
			console.log(row_data[i].hi1);
			console.log(row_data[i].hello1);
		}
    	// console.log( 'pulled in '+row_data.length + ' rows ')
	});

})


// // set auth to be able to edit/add/delete
// my_sheet.setAuth('francis4349@gmail.com','francis10', function(err){
//     my_sheet.getInfo( function( err, sheet_info ){
//         console.log( sheet_info.title + ' is loaded' );
//         // use worksheet object if you want to forget about ids
//         sheet_info.worksheets[0].getRows( function( err, rows ){
//             rows[0].colname = 'new val';
//             rows[0].save();
//             rows[0].del();
//         }
//     }

//     // column names are set by google based on the first row of your sheet
//     my_sheet.addRow( 2, { colname: 'col value'} );

//     my_sheet.getRows( 2, {
//         start: 100,            // start index
//         num: 100            // number of rows to pull
//     }, function(err, row_data){
//         console.log(row_data);
//         console.log(err)
//     });
// })
 // key = key from googe spreadsheet publish
// worksheet = 0-based index of worksheet
// range = "R1C1:R5C5"
// headerRow = 1-based index of row containing header, if there is a header
// var key = "1Sn3TQLUaILVjp5KMy1cvDsfaH3ISUtkHAUg7VmMsAj8";
// var worksheet = 0;
// var range  = "A1:C7";
// var headerRow = 1;

// // console.log(Meteor.call('spreadsheet/fetch',key, worksheet, range, headerRow ));
// // console.log("lsvknvas");
// var spreadsheetName = 'Steps'; // must match exactly the name you gave your Google spreadsheet
// var serviceEmail = '795073958503-qukpg8tt7vbsjqtufgc379ag24200fr3@developer.gserviceaccount.com'; // this is fake; replace with your own

// // var result = Meteor.call("spreadsheet/fetch2", spreadsheetName, 1, {email: serviceEmail});

// console.log(Meteor.call('spreadsheet/fetch2',key, "testsheet","37790891958@developer.gserviceaccount.com"));
// console.log(result);