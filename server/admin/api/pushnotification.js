// app.pushServer = new CordovaPush('AIzaSyDG4qL7oJqpfhHxhQVAsE_so6FPsGDbpUk', {} );
// app.pushServer.initFeedback();


var apnsProdCertText = Assets.getText('certificate_production.pem');
var apnsProdKeyText = Assets.getText('key.pem');

var apnsDevCertText = Assets.getText('certificate_development.pem');

var optionsPush = {
    'passphrase': '123456',
    'certData': apnsProdCertText,
    'keyData': apnsProdKeyText,
    'gateway': 'gateway.push.apple.com'
};


app.pushServer = new CordovaPush('AIzaSyDG4qL7oJqpfhHxhQVAsE_so6FPsGDbpUk', optionsPush );
app.pushServer.initFeedback();