Meteor.methods({
	addPost: function (title, message) {
		// check if user is logged in
		// if (Meteor.user())

		var id = Posts.insert({
			Title: title,
			Message: message
		});

		return id;
	},
	editPost: function (postID, title, message) {
		
		Posts.update(postID, {
			$set:{
				Title: title,
				Message: message				
			}
		});

	},
	deletePost: function (postID) {

		Posts.remove(postID);

	}
});