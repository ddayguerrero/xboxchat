Meteor.subscribe('messages');
Meteor.subscribe('channels');
Meteor.subscribe('allUsernames');

// Pass the current channel session variable as the argument
Template.messages.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('messages', Session.get('channel'));
  });
});