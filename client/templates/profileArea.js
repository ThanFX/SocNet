Template.profileArea.helpers({
	following: function() {
		return Meteor.user().profile.follow;
	},
	followers: function() {
		var user = Meteor.user();
		var followers = Meteor.users.find({'profile.follow': {$in: [user.username]}});
		return followers.fetch();
	}
});

Template.profileArea.events({
	'click .filter-user': function(event){
		event.preventDefault();
		var selectedUser = event.target.text.trim();
		Session.set('username', selectedUser);
	},
	'click .community': function(event){
		event.preventDefault();
		var selectedUser = event.target.text.trim();
		Session.set('username', null);
	}
});