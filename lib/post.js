Post = new Mongo.Collection('post');

Meteor.methods({
	addPost: function(content) {
		if (!Meteor.userId()) {
			throw new Meteor.Error('not-authorized','Ошибка авторизации');
		}

		var userName = Meteor.user().username;
		Post.insert({
			content: content,
			userName: userName,
			created: new Date()
		});
	},
	follow: function(post){
		var user = Meteor.user();
		if (!user) {
			throw new Meteor.Error('not-authorized','Ошибка авторизации');	
		}
		//console.log(post);
		if((user.username != post.userName) &&
		(user.profile.follow.indexOf(post.userName) == -1)) {
			Meteor.users.update({_id: user._id}, {$push: {'profile.follow': post.userName}});
		}
	}
})