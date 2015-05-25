app.reactEmailTemplate = function(){
  var emailData = Meteor.call("sendWeaklyReport");
  // console.log(emailData)
	return React.renderComponentToString(emailTemplate({"emailData": emailData}));
}

var emailTemplate = React.createClass({
  render: function() {
    // console.log(this.props.emailData)
    var assImg = [];
    var desImg = [];
    var missImg = [];

    var emailData = this.props.emailData;
    for(var i=0,il=emailData.assImg.length;i<il;i++)
      assImg.push(DOM.img({"src": emailData.assImg[i], key: emailData.assImg[i]}, null));
  	for(var i=0,il=emailData.desImg.length;i<il;i++)
      desImg.push(DOM.img({"src": emailData.desImg[i], key: emailData.desImg[i]}, null));
    for(var i=0,il=emailData.missImg.length;i<il;i++)
      missImg.push(DOM.img({"src": emailData.missImg[i], key: emailData.missImg[i]}, null));
    
    return div(null, 
        [
          div(null, assImg),
          div(null, desImg),
          div(null, missImg),
        ]
      );
  },
});