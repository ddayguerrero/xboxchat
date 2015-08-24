// Assign each message to the user that sent it
Messages.insert({
  text: $('.input-box_text').val(),
  user: Meteor.userId(), // ID of current user
  timestamp: Date.now()
});