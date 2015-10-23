app.routeParam = function(key){
  var value = "";
  var current = Router.current();
  if(current && current.params && current.params[key])
    value = current.params[key];
  return value;
}

