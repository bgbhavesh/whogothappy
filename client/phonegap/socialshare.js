app.logoUrl = "https://lh5.ggpht.com/Z6zbXtmH6awpruA52TmgNy6gACH0h-Ijo-o9kxBMHzw73Nt4OM2NEhuqFvTl2xInbBB_=w300";
app.name = "WhoGotHappy";
app.appUrl = "http://whogothappy.com"
app.onShareFlag = null;
app.onShareFacebook = function (message) {
    var starttime = new Date().getTime();
    log("app.onShareFacebook started", null, arguments, 1);
    try {

        if (app.phonegap)
            window.plugins.socialsharing.shareViaFacebook(message, app.logoUrl, app.appUrl, app.onShareSuccess, app.onShareError);
        else
            log("Not a phonegap user");
    }
    catch (err) {
        log(err);
    }
    log("app.onShareFacebook ended", new Date().getTime() - starttime, arguments, 1);
}

app.onShareTwitter = function (message) {
    if (app.phonegap)
        window.plugins.socialsharing.shareViaTwitter(app.name, message, app.logoUrl, app.appUrl, app.onShareSuccess, app.onShareError);
    else
        log("Not a phonegap user");
}

app.onShareAny = function (message) {
    window.plugins.socialsharing.share(app.name, message, app.logoUrl, null, app.onShareSuccess, app.onShareError);
}

app.onShareError = function () {
    app.visualEffect(app.onShareFlag, app.onError);
}

app.onShareSuccess = function () {
    app.visualEffect(app.onShareFlag, app.onSuccess);
}