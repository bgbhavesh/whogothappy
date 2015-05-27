app.reactEmailTemplate = function(){
  var emailData = Meteor.call("sendWeaklyReport");
  // console.log(emailData)
	return React.renderComponentToString(emailTemplate({"emailData": emailData}));
}
app.reactEmailInvite = function(){
  return React.renderComponentToString(emailTemplateInvite({"emailData": null}));
}
var emailTemplate = React.createClass({
  render: function() {
    // console.log(this.props.emailData)
    var assImg = [];
    var desImg = [];
    var missImg = [];
    var imgStyle = {
        "width": "150px",
        "height": "auto",
        "font-size": "1rem",
    }
    var emailData = this.props.emailData;
    for(var i=0,il=emailData.assImg.length;i<il;i++)
      assImg.push(DOM.img({"src": emailData.assImg[i], style: imgStyle}, null));
  	for(var i=0,il=emailData.desImg.length;i<il;i++)
      desImg.push(DOM.img({"src": emailData.desImg[i], style: imgStyle}, null));
    for(var i=0,il=emailData.missImg.length;i<il;i++)
      missImg.push(DOM.img({"src": emailData.missImg[i], style: imgStyle}, null));
    
    return div(null, 
        [
          div(null, assImg),
          div(null, desImg),
          div(null, missImg),
        ]
      );
  },
});

var emailTemplateInvite = React.createClass({
  render: function() {
    // console.log(this.props.emailData)
    var assImg = [];
    var desImg = [];
    var missImg = [];
    var imgStyle = {
        "width": "150px",
        "height": "auto",
        "font-size": "1rem",
    }
    var emailData = this.props.emailData;
    // for(var i=0,il=emailData.assImg.length;i<il;i++)
    //   assImg.push(DOM.img({"src": emailData.assImg[i], style: imgStyle}, null));
    // for(var i=0,il=emailData.desImg.length;i<il;i++)
    //   desImg.push(DOM.img({"src": emailData.desImg[i], style: imgStyle}, null));
    // for(var i=0,il=emailData.missImg.length;i<il;i++)
    //   missImg.push(DOM.img({"src": emailData.missImg[i], style: imgStyle}, null));
    
    return div({"style": {"text-align": "center"}}, 
        [
          div({"style": {"background-color": "#3498db"}, "width": "100%"}, 
            [
              div(null, "Sixteensmiles"),
              div(null, "See Smiles Everywhere!")
            ]
          ),
          div({"style": {"background-color": "white"}, "width": "100%"}, 
            [
              div(null, "Hi, nicolsondsouza@gmail.com"),
              div(null, 'You have been invited by nicolsondsouza to play "Who got happy?".'),
              div(null, 'click here to go to the app store. click here to go the application.'),
            ]
          ),
          div({"style": {"background-color": "#3498db"}, "width": "100%"}, 
            [
              div(null, "Copyright Â© 2014 SixteenSmiles. All rights reserved."),
              div(null, "If you do not want to recieve emails from us, you can unsubscribe.")
            ]
          ),
        ]
      );
  },
});
// #3498db