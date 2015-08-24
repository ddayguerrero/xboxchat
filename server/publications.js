// Publish messages server-side.
Meteor.publish('messages', function () {
    return Messages.find();
});

Meteor.publish("allUsernames", function () {
  return Meteor.users.find({}, {fields: {
    "username": 1,
    "services.twitter.screenName": 1
  }});
});