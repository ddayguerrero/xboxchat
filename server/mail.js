// Setup MAIL_URL and define SMTP credentials
Meteor.startup(function () {
	// SMTP
  smtp = {
    username: 'ddayy.guerrero@hotmail.com',
    password: '-zYLlcWy5CPbtg5nlB1z4A',
    server:   'smtp.mandrillapp.com',
    port: 587
 };
    // MAIL_URL
  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});

Accounts.emailTemplates.siteName = "Xbox Chat";
Accounts.emailTemplates.from = "Phil Spencer <accounts@example.com>";
Accounts.emailTemplates.enrollAccount.subject = function (user) {
    return "Welcome to Xbox Chat, " + user.profile.name;
};
Accounts.emailTemplates.enrollAccount.text = function (user, url) {
   return "You have been selected to participate in a chat platform for the greatest console!"
     + " To activate your account, simply click the link below:\n\n"
     + url;
};