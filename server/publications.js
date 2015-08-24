// Publish messages server-side.
Meteor.publish('messages', function () {
    return Messages.find();
});

// Publish usernames server-side.
Meteor.publish("allUsernames", function () {
  return Meteor.users.find({}, {fields: {
    "username": 1,
    "services.twitter.screenName": 1
  }});
});

// Publish channels server-side.
Meteor.publish('channels', function () {
    return Channels.find();
});