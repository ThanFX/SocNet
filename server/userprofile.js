Accounts.onCreateUser(function(options, user){
	user.profile = user.profile || {};
	user.profile.follow = [];
	return user;
})