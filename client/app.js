// Array holding chat messages
Template.messages.helpers({
  messages: Messages.find({})
});

Accounts.ui.config({passwordSignupFields: 'USERNAME_AND_EMAIL'});

Template.registerHelper("usernameFromId", function (userId){
  var user = Meteor.users.findOne({_id: userId});
  if (typeof user === "undefined") {
    return "Anonymous";
  }
  if (typeof user.services.github !== "undefined") {
    return user.github.username;
  }
  
   if (typeof user.services.twitter !== "undefined") {
    return user.services.twitter.screenName;
  }
  return user.username;
});

Template.registerHelper("timestampToTime", function (timestamp) {
    var date = new Date(timestamp);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    return hours + ':' + minutes.substr(minutes.length-2) + ':' + seconds.substr(seconds.length-2);
});

Meteor.subscribe('messages');
Meteor.subscribe('allUsernames');
