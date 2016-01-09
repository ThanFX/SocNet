Template.postsList.helpers({
	posts: function(){
		var result;
		if(Session.get('username')) {
			result = Post.find({userName: Session.get('username')}, {sort: {created: -1}});
		} else {
			result = Post.find({}, {sort: {created: -1}});
		}
		return result;
	}
});

Template.postsList.events({
	'click .follow-link': function(event) {
		event.preventDefault();
		Meteor.call('follow', this);
	}
});