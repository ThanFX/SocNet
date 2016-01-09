Template.postsList.helpers({
	posts: function(){
		return Post.find();
	}
});