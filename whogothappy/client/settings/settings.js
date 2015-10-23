Template.settings.helpers({
  "model": function(){

  }
});

Template.settings.events({
  "click .menu .item": function(evt, tpl){
    app.onChangeSettings({evt: evt, tpl: tpl});
  }
});

app.onChangeSettings = function(opt){
  var ele = opt.evt.currentTarget;
  var changeValue = $(ele).attr("data-value");
  if(!isNaN(changeValue))
    changeValue = Number(changeValue);
  var changeTitle = $(ele).parent(".menu").attr("data-change");

  var update = {};
  update["profile."+changeTitle] = changeValue;
  Meteor.users.update(Meteor.userId(), {$set: update});
}
Template.settings.rendered = function(){
  $('.ui.dropdown').dropdown();
}