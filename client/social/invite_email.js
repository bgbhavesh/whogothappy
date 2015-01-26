app.inviteWithEmail = function () {
    var mailto = "mailto:?subject=" + encodeURIComponent(app.app.welcome) + '&body=' + encodeURIComponent(app.app.welcome);
    window.open(mailto, "_blank");
}