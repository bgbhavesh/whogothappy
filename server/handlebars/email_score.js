// process.env.MAIL_URL = 'smtp://postmaster%40sandbox77539.mailgun.org:2l9s4cmzqic2@smtp.mailgun.org:587';
process.env.MAIL_URL = 'smtp://postmaster@sandbox3b5d53e0d15b497ab2b27a2e3fadf564.mailgun.org:abc123123@smtp.mailgun.org:587';

function emailDailyGen(emails,data){
     // Fiber(function () {
          //Accounts.oauth._middleware(req, res, next);
            console.log("emailDailyGen");
            console.log(emails);
            var html = Handlebars.templates['email']({ "email": emails ,"username" : data.username, "gameEnd": data.gameEnd, "clicked" : data.clicked, "score" : data.score, "wrong": data.wrong})
    //         var html = 
    //         '<html>'
    //         +'<head>'
    //     +'<title>SixteenSmiles</title>'
    //     +'<style type="text/css">'
    //         +'body, #bodyTable, #bodyCell, #bodyCell{height:100% !important; margin:0; padding:0; width:100% !important;font-family:Helvetica, Arial, "Lucida Grande", sans-serif;}'
    //         +'table{border-collapse:collapse;}'
    //         +'table[id=bodyTable] {width:100%!important;margin:auto;max-width:500px!important;color:#7A7A7A;font-weight:normal;}'
    //         +'img, a img{border:0; outline:none; text-decoration:none;height:auto; line-height:100%;}'
    //         +'a {text-decoration:none !important;border-bottom: 1px solid;}'
    //         +'h1, h2, h3, h4, h5, h6{color:#5F5F5F; font-weight:normal; font-family:Helvetica; font-size:20px; line-height:125%; text-align:Left; letter-spacing:normal;margin-top:0;margin-right:0;margin-bottom:10px;margin-left:0;padding-top:0;padding-bottom:0;padding-left:0;padding-right:0;}'
    //         +'.ReadMsgBody{width:100%;} .ExternalClass{width:100%;} '
    //         +'table, td{mso-table-lspace:0pt; mso-table-rspace:0pt;} '
    //         +'#outlook a{padding:0;} '
    //         +'img{-ms-interpolation-mode: bicubic;display:block;outline:none; text-decoration:none;}'
    //         +'body, table, td, p, a, li, blockquote{-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%; font-weight:normal!important;}'
    //         +'.ExternalClass td[class="ecxflexibleContainerBox"] h3 {padding-top: 10px !important;} '
    //         +'h1{display:block;font-size:26px;font-style:normal;font-weight:normal;line-height:100%;}'
    //         +'h2{display:block;font-size:20px;font-style:normal;font-weight:normal;line-height:120%;}'
    //         +'h3{display:block;font-size:17px;font-style:normal;font-weight:normal;line-height:110%;}'
    //         +'h4{display:block;font-size:18px;font-style:italic;font-weight:normal;line-height:100%;}'
    //         +'.flexibleImage{height:auto;}'
    //         +'.linkRemoveBorder{border-bottom:0 !important;}'
    //         +'table[class=flexibleContainerCellDivider] {padding-bottom:0 !important;padding-top:0 !important;}'
    //         +'body, #bodyTable{background-color:#E1E1E1;}'
    //         +'#emailHeader{background-color:#E1E1E1;}'
    //         +'#emailBody{background-color:#FFFFFF;}'
    //         +'#emailFooter{background-color:#E1E1E1;}'
    //         +'.textContent, .textContentLast{color:#8B8B8B; font-family:Helvetica; font-size:16px; line-height:125%; text-align:Left;}'
    //         +'.textContent a, .textContentLast a{color:#205478; text-decoration:underline;}'
    //         +'.emailButton{background-color:#205478; border-collapse:separate;}'
    //         +'.buttonContent{color:#FFFFFF; font-family:Helvetica; font-size:18px; font-weight:bold; line-height:100%; padding:15px; text-align:center;}'
    //         +'.buttonContent a{color:#FFFFFF; display:block; text-decoration:none!important; border:0!important;}'
    //         +'.imageContentText {margin-top: 10px;line-height:0;}'
    //         +'.imageContentText a {line-height:0;}'
    //         +'#invisibleIntroduction {display:none;display:none !important;} '
    //         +'span[class=ios-color-hack] a {color:#275100!important;text-decoration:none!important;} /* Remove all link colors in IOS (below are duplicates based on the color preference) */'
    //         +'span[class=ios-color-hack2] a {color:#205478!important;text-decoration:none!important;}'
    //         +'span[class=ios-color-hack3] a {color:#8B8B8B!important;text-decoration:none!important;}'
    //         +'.a[href^="tel"], a[href^="sms"] {text-decoration:none!important;color:#606060!important;pointer-events:none!important;cursor:default!important;}'
    //         +'.mobile_link a[href^="tel"], .mobile_link a[href^="sms"] {text-decoration:none!important;color:#606060!important;pointer-events:auto!important;cursor:default!important;}'
    //         +'@media only screen and (-webkit-device-pixel-ratio:.75){'
    //         +'}'
    //         +'@media only screen and (-webkit-device-pixel-ratio:1){}'
    //         +'@media only screen and (-webkit-device-pixel-ratio:1.5){}'
    //         +'@media only screen and (min-device-width : 320px) and (max-device-width:568px) {}'
    //     +'</style>'
    //         +'</head>'
    // +'<body bgcolor="#E1E1E1" leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0">'
    // +'<center style="background-color:#E1E1E1;">'
    //         +'<table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable" style="table-layout: fixed;max-width:100% !important;width: 100% !important;min-width: 100% !important;">'
    //             +'<tbody><tr>'
    //                 +'<td align="center" valign="top" id="bodyCell">'
    //                     +'<table bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" width="700" id="emailBody">'
    //                         +'<tbody><tr>'
    //                             +'<td align="center" valign="top">'
    //                                 +'<table border="0" cellpadding="0" cellspacing="0" width="100%" style="color:#FFFFFF;" bgcolor="#3498db">'
    //                                     +'<tbody><tr>'
    //                                         +'<td align="center" valign="top">'
    //                                             +'<table border="0" cellpadding="0" cellspacing="0" width="500" class="flexibleContainer">'
    //                                                 +'<tbody><tr>'
    //                                                     +'<td align="center" valign="top" width="500" class="flexibleContainerCell">'
    //                                                         +'<table border="0" cellpadding="30" cellspacing="0" width="100%">'
    //                                                             +'<tbody><tr>'
    //                                                                 +'<td align="center" valign="top" class="textContent">'
    //                                                                     +'<h1 style="color:#FFFFFF;line-height:100%;font-family:Helvetica,Arial,sans-serif;font-size:35px;font-weight:normal;margin-bottom:5px;text-align:center;">Sixteensmiles</h1>'
    //                                                                     +'<h2 style="text-align:center;font-weight:normal;font-family:Helvetica,Arial,sans-serif;font-size:23px;margin-bottom:10px;color:#205478;line-height:135%;">See Smiles Everywhere!</h2>' 
    //                                                                 +'</td>'
    //                                                             +'</tr>'
    //                                                         +'</tbody></table>'
    //                                                     +'</td>'
    //                                                 +'</tr>'
    //                                             +'</tbody></table>'
    //                                         +'</td>'
    //                                     +'</tr>'
    //                                 +'</tbody></table>'
    //                              +'</td>'
    //                         +'</tr>      '                      
    //                         +'<tr>'
    //                             +'<td align="center" valign="top">'
    //                                 +'<table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#F8F8F8">'
    //                                     +'<tbody><tr>'
    //                                         +'<td align="center" valign="top">'
    //                                             +'<table border="0" cellpadding="0" cellspacing="0" width="650" class="flexibleContainer">'
    //                                                 +'<tbody><tr>'
    //                                                     +'<td align="center" valign="top" width="650" class="flexibleContainerCell">'
    //                                                         +'<table border="0" cellpadding="30" cellspacing="0" width="100%">'
    //                                                             +'<tbody><tr>'
    //                                                                 +'<td align="center" valign="top">'
    //                                                                     +'<table border="0" cellpadding="0" cellspacing="0" width="100%">'
    //                                                                         +'<tbody><tr>'
    //                                                                             +'<td valign="top" class="textContent">'
    //                                                                                 +'<h3 style="color:#5F5F5F;line-height:125%;font-family:Helvetica,Arial,sans-serif;font-size:20px;font-weight:normal;margin-top:0;margin-bottom:3px;text-align:left;">Hi, '+email+'</h3>'
    //                                                                             +'</td>'
    //                                                                         +'</tr>'
    //                                                                         +'<tr style="color:#205478;"> '
    //                                                                           // +'<th>Userid</th>'
    //                                                                           +'<th>Username</th>'
    //                                                                           // +'<th>Email</th>'
    //                                                                           +'<th>Time</th>'
    //                                                                           +'<th>Attemped</th>'
    //                                                                           +'<th>Right</th>'
    //                                                                           +'<th>Wrong</th>'
    //                                                                         +'</tr>'
    //                                                                         +'<tr style="color:#205478;"> '
    //                                                                           // +'<th>'+data._id+'</th>'
    //                                                                           +'<th>'+data.username+'</th>'
    //                                                                           // +'<th>'+data.emailid+'</th>'
    //                                                                           +'<th>'+data.gameEnd+'</th>'
    //                                                                           +'<th>'+data.clicked+'</th>'
    //                                                                           +'<th>'+data.score+'</th>'
    //                                                                           +'<th>'+data.wrong+'</th>'
    //                                                                         +'</tr>'
    //                                                                     +'</tbody></table>'
    //                                                                 +'</td>'
    //                                                             +'</tr>'
    //                                                         +'</tbody></table>'
    //                                                     +'</td>'
    //                                                 +'</tr>'
    //                                             +'</tbody></table>'
    //                                         +'</td>'
    //                                     +'</tr>'
    //                                 +'</tbody></table>'
    //                             +'</td>'
    //                         +'</tr>'
    //                         +'<tr>'
    //                             +'<td align="center" valign="top">'
    //                                 +'<table border="0" cellpadding="0" cellspacing="0" width="100%" style="color:#FFFFFF;" bgcolor="#3498db">'
    //                                     +'<tbody><tr>'
    //                                         +'<td align="center" valign="top">'
    //                                             +'<table border="0" cellpadding="30" cellspacing="0" width="500" class="flexibleContainer">'
    //                                                 +'<tbody><tr>'
    //                                                     +'<td style="padding-top:0;" align="center" valign="top" width="500" class="flexibleContainerCell">'
    //                                                         +'<table align="left" border="0" cellpadding="0" cellspacing="0" class="flexibleContainer">'
    //                                                             +'<tbody><tr>'
    //                                                                 +'<td align="left" valign="top" class="textContent">'
    //                                                                     +'<div style="text-align:left;font-family:Helvetica,Arial,sans-serif;font-size:15px;margin-bottom:0;margin-top:10px;color:#fffff;line-height:135%;"><div style="font-family:Helvetica,Arial,sans-serif;font-size:13px;color:#828282;text-align:center;line-height:120%;">'
    //                                                                     +'Copyright © 2014 <a href="" target="" style="text-decoration:none;color:#205478;"><span style="color:#fffff;">SixteenSmiles</span></a>. All&nbsp;rights&nbsp;reserved.</div>'
    //                                                                         +'<div>If you do not want to recieve emails from us, you can <a href="#" target="" style="text-decoration:none;color:#205478;"><span style="color:#205478;">unsubscribe</span></a>.</div>'
    //                                                                 +'</div>'
    //                                                                 +'</td>'
    //                                                             +'</tr>'
    //                                                         +'</tbody></table>'
    //                                                     +'</td>'
    //                                                 +'</tr>'
    //                                             +'</tbody></table>'
    //                                         +'</td>'
    //                                     +'</tr>'
    //                                 +'</tbody></table>'
    //                             +'</td>'
    //                         +'</tr>'
    //                     +'</tbody></table>'                    
    //                 +'</td>'
    //             +'</tr>'
    //         +'</tbody></table>'
    //     +'</center>'
    //        +'</body> </html>';
           // console.log("html generation edded");
           // console.log(html);
        Meteor.call("sendEmail",html,emails);
   // }).run();
}
function emailInvitGen(emails,username,id){
            console.log("emailInvitGen");
            console.log(emails);
            var html = Handlebars.templates['emailInvite']({"email": emails ,"username" : username,"id": id })   
            Meteor.call("sendEmail",html,emails);
}
Meteor.methods({
    "sendEmail" : function(html,email){

        try{
            console.log("sendEmail from methods");
            this.unblock();
            Email.send({
                from: 'Sixteensmiles <tapmate@youiest.com>',
                to:   email,            
                subject : "subjectEmail",
                html : html
            });

            // Duplicate copy sent
            Email.send({
                from: 'Sixteensmiles <tapmate@youiest.com>',
                to:   "decivote@gmail.com",            
                subject : "Duplicate copy of " +email,
                html : html
            });
            
        }
        catch(error){
            console.log(error);
        }
    },
    "sendInvitation" : function(emails,username,id){
        try{
            emailInvitGen(emails,username,id);            
        }
        catch(error){
            console.log(error);
        }
    },
    "genMail" : function(email,data){
        try{
            emailDailyGen(email,data);            
        }
        catch(error){
            console.log(error);
        }
    },
    "saveScore" : function(userId,totalscore,score,tempDate){
            // Score.insert({"clientId":Meteor.userId(),"score":app.totalscore,"totalScore":app.score,"date" :tempDate});
            console.log(userId);
            console.log(totalscore);
            console.log(score);
            console.log(tempDate);
            
            // try{
                Score.insert({"clientId":userId,"score":totalscore,"totalScore":score,"date" :tempDate});
                return true;     
            // }
            // catch(error){
            //     console.log(error);
            // }
    },
    "sendcacheData" : function(data){
            data.forEach(function() {
                console.log(data);
                Score.insert({"clientId":data.clientId,"score":data.score,"totalScore":data.totalScore,"date" :data.date});
            }); 
            return true;     
            // }
            // catch(error){
            //     console.log(error);
            // }
    },

});