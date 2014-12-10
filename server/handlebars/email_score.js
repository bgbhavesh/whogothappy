process.env.MAIL_URL = 'smtp://postmaster%40sandbox77539.mailgun.org:2l9s4cmzqic2@smtp.mailgun.org:587';
function emailDailyGen(emails,data){
    return;
            console.log("emailDailyGen");
            console.log(emails);
            var html = Handlebars.templates['email']({ "email": emails ,"username" : data.username, "gameEnd": data.gameEnd, "clicked" : data.clicked, "score" : data.score, "wrong": data.wrong})   
        Meteor.call("sendEmail",html,emails);
}
function emailInvitGen(emails){
    return;
            console.log("emailInvitGen");
            console.log(emails);
            var html = Handlebars.templates['emailInvite']({"email": emails ,"username" : data.username,"id": id })   
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
    "sendInvitation" : function(email){
        try{
            emailInvitGen();            
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