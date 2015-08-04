// process.env.MAIL_URL = 'smtp://postmaster%40sandbox77539.mailgun.org:2l9s4cmzqic2@smtp.mailgun.org:587';
process.env.MAIL_URL = 'smtp://postmaster@sandbox3b5d53e0d15b497ab2b27a2e3fadf564.mailgun.org:abc123123@smtp.mailgun.org:587';

function emailDailyGen(emails,data){
            console.log("emailDailyGen");
            var html = Handlebars.templates['email']({ "email": emails ,"username" : getUsername(emails), "gameEnd": data.gameEnd, "clicked" : data.clicked, "score" : data.score, "wrong": data.wrong, "corrected": data.corrected})
    
        Meteor.call("sendEmail",html,emails);
}
function emailWeaklyGen(email,data){
            console.log("emailWeaklyGen");
            console.log(data.assImg[0]);
            // console.log(ImageClicked.find({},{sort:{"timePerSlide":-1},limit:5}))
            var html = Handlebars.templates['emailweakly']({ "email": email ,"username" : getUsername("bgbhavesh@gmail.com"), "a1":data.assImg[0],"a2":data.assImg[1],"a3":data.assImg[2],"a4":data.assImg[3],"a5":data.assImg[4],"d1":data.desImg[0],"d2":data.desImg[1],"d3":data.desImg[2],"d4":data.desImg[3],"d5":data.desImg[4],"m1":data.missImg[0],"m2":data.missImg[1],"m3":data.missImg[2],"m4":data.missImg[3],"m5":data.missImg[4]})
            // console.log(html)
            Meteor.call("sendEmail",html,email);
}
function emailInvitGen(emails,username,id){
            console.log("emailInvitGen");
            console.log(emails);
            var html = Handlebars.templates['emailInvite']({"email": emails ,"username" : username,"id": id })   
            Meteor.call("sendEmail",html,emails);
}
function getUsername(emails){
    var res = emails.split("@");
    if(res[0])
        return res[0];
    else
        return emails;

}

Meteor.methods({
    "sendWeaklyReport" : function(email,data,gameId){
        // data = ""
        var assImg = [];
        var collection = [];
        var ass = ImageClicked.find({},{sort:{"timePerSlide":-1}}).fetch();
        
        for (var i = 0; i < 5; i++) {
            // console.log(ass[i].src)
            ass[i].src = ass[i].src.substr(1);
            assImg.push(ass[i].src) //"http://www.whogothappy.com"+
        };
        collection.assImg =assImg;
        
        var desImg = [];
        var des = ImageClicked.find({},{sort:{"timePerSlide":-1}}).fetch();
        
        for (var i = 0; i < 5; i++) {
            // console.log(des[i].src)
            des[i].src = des[i].src.substr(1);
            desImg.push(des[i].src) //"http://www.whogothappy.com"+
        };
        collection.desImg =desImg;

        var missImg = [];
        var miss = ImageMissed.find({},{sort:{"click":1},limit:5}).fetch();
        for (var i = 0; i < 5; i++) {
            // console.log(des[i].src)
            miss[i].src = miss[i].src.substr(1);
            missImg.push(miss[i].src) //"http://www.whogothappy.com"+
        };
        collection.missImg =missImg;

        email = "bgbhavesh@gmail.com";
        return collection;
        // emailWeaklyGen(email,collection);
        // console.log("sendWeaklyReport")
    },
    "sendEmail" : function(html,email){

        try{
            console.log("sendEmail from methods");
            this.unblock();
            Email.send({
                from: 'Whogothappy <tapmate@youiest.com>',
                to:   email,            
                subject : "subjectEmail",
                html : html
            });

            // Duplicate copy sent
            Email.send({
                from: 'Whogothappy <tapmate@youiest.com>',
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
    "genMail" : function(email,data,gameId){
        try{
            emailDailyGen(email,data);
            // app.challangeToDrive(email,data,gameId)            
        }
        catch(error){
            console.log(error);
        }
    },
    "saveScore" : function(userId,totalscore,score,tempDate){
            // Score.insert({"clientId":Meteor.userId(),"score":app.totalscore,"totalScore":app.score,"date" :tempDate});
            // console.log(userId);
            // console.log(totalscore);
            // console.log(score);
            // console.log(tempDate);
            
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
                // console.log(data);
                Score.insert({"clientId":data.clientId,"score":data.score,"totalScore":data.totalScore,"date" :data.date});
            }); 
            return true;     
            // }
            // catch(error){
            //     console.log(error);
            // }
    },

});