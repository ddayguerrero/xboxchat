// Array holding chat messages
Template.messages.helpers({
  messages: Messages.find({})
});

Accounts.ui.config({passwordSignupFields: 'USERNAME_AND_EMAIL'});

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