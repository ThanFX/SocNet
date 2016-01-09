Template.postForm.events({
	'submit form': function(event){
		event.preventDefault();
		var content = document.getElementById('content').value;
		Post.insert({content: content, created: new Date()});
		event.target.reset();
	}
});