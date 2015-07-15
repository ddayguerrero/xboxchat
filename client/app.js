// Array holding chat messages
Template.messages.helpers({
  messages: Messages.find({})
});

// // Add input text into the helper array
// Template.footer.events({
//   'keypress input': function(e) {
//         if (e.charCode == 13) {
//             e.stopPropagation();
//             $('.message-history').append('<div class="message"><a href="" class="message_profile-pic"></a><a href="" class="message_username">scotch</a><span class="message_timestamp">1:31 AM</span><span class="message_star"></span><span class="message_content">' + $('.input-box_text').val() + '</span></div>');
//             $('.input-box_text').val(""); // Clear Input 
//             return false;
//         }
//     }
// });

Template.footer.events({
  'keypress input': function(e) {
    var inputVal = $('.input-box_text').val();
    if(!!inputVal) {
      var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
      if (charCode == 13) {
        e.stopPropagation();
        Messages.insert({chattext: $('.input-box_text').val()});
        $('.input-box_text').val("");
        return false;
      }    
    }
  }
});