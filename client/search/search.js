Template.search.helpers({
  "model": function(){

  }
});

Template.search.events({
  "keyup #searchKeyword": function(evt, tpl){
    if(evt.keyCode == 13)
      app.onSearch();
  },
  "click .onSearch": function(){
    app.onSearch();
  }
});

app.onSearch = function(){
  var keyword = $("#searchKeyword").val();
  $(".keyword.search").addClass("loading");
  if(keyword){
    Meteor.call("seachKeyword", Meteor.userId(), keyword, function(){
      $(".keyword.search").removeClass("loading");
    });
  }
  $("#searchKeyword").val("");
}