// Publish messages server-side.
Meteor.publish('messages', function () {
    return Messages.find({channel: channel}); // provides the channel argument in the subscription call.
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