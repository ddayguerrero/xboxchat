Meteor.startup(function() {
	
	Factory.define('message', Messages, {
    text: function() {
        return Fake.sentence();
    },
    user: Meteor.users.findOne()._id,
    timestamp: Date.now(),
    channel: 'general'
	});
	
	// Remove All Messages Before Seeding
	Messages.remove({});
	
	if (Messages.find({}).count() === 0)	{
		_(1).times(function(n) {
			Factory.create('message');
		});
	}
	
	// Remove All Channels Before Seeding
	Channels.remove({});

	Channels.insert({
	name: "general"
	});
	
	Channels.insert({
	name: "random"
	});
	
});
