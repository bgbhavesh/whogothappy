 Meteor.methods({
    "sendEmail" : function(html,email){
            try{
                console.log("sendEmail from methods");
                this.unblock();
                Email.send({
                    from: 'Tapmate <tapmate@youiest.com>',
                    to:   email,            
                    subject : App.subjectEmail,
                    html : html
                });

                // Duplicate copy sent
                Email.send({
                    from: 'Tapmate <tapmate@youiest.com>',
                    to:   "decivote@gmail.com",            
                    subject : "Duplicate copy of " +email,
                    html : html
                });
                
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.sendEmail"})
            }
        },
    });