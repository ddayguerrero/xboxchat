// Array holding chat messages
Template.messages.helpers({
  messages: [
    { chattext: "All these messages" },
    { chattext: "Uses the same template" },
    { chattext: "But have a different data context" },
    { chattext: "It's why these messages are all different!" },
    { chattext: "Hey!" },
    { chattext: "What's up man!" },
    { chattext: "Hello" }
  ]
});

// Add input text into the helper array
Template.footer.events({
  'keypress input': function(e) {
        if (e.charCode == 13) {
            e.stopPropagation();
            $('.message-history').append('<div class="message"><a href="" class="message_profile-pic"></a><a href="" class="message_username">scotch</a><span class="message_timestamp">1:31 AM</span><span class="message_star"></span><span class="message_content">' + $('.input-box_text').val() + '</span></div>');
            $('.input-box_text').val(""); // Clear Input 
            return false;
        }
    }
});