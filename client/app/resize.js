app.onResize = function () {
    if (!$(".card:first")[0]) {
        setTimeout(app.onResize);
        return;
    }
    var width = $("#clickEvent div figure img:first").width();
    var width = $(".card:first").width();
    var css = "";
    css = ".card figure img{height:" + width + "px;width:" + width + "px;}";
    $("#dynamicCss").append(css);
    css = ".card figure{height:" + width + "px;width:" + width + "px;}";
    $("#dynamicCss").append(css);
    css = ".card{height:" + width + "px;width:}";
    $("#dynamicCss").append(css);
};

$(window).resize(app.onResize);

app.onResize();