Template.votes.events({
  "click .votesImage": function(evt, tpl){
    app.onClickVote({
      evt: evt,
      tpl: tpl,
      data: this
    });
  }
});
