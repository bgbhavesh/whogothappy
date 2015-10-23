app.routeParam = function(key){
  var value = "";
  var current = Router.current();
  if(current && current.params && current.params[key])
    value = current.params[key];
  return value;
}


app.routePage = function(dev){
  var pageNum = app.routeParam("params.pageNum");
  pageNum = Number(pageNum) +dev;
  if(pageNum < 0)
    pageNum = 0;
  var url = "/"+pageNum;
  Router.go(url);
}

app.nextPrev = function(opt){
  var nextPage =
    Number($(opt.evt.currentTarget).attr("data-code"))
      + Number(app.routeParam("pageNum"));
  if(nextPage < 0)
    nextPage = 0;
  Router.go("/" +opt.route +"/" +nextPage);
}