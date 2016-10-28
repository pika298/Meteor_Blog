// ref: Collections.js
Meteor.methods({
	addPost: function (title, message, postBody) {
		// check if user has role 'admin'
		if (Roles.userIsInRole(Meteor.user(),'admin')) {
	  		var id = Posts.insert({
				Title: title,
				Message: message,
				Body: postBody,
				CreatedAt: Date.now()
			});

			return id;
		 } else {
		 	throw new Meteor.Error('Not Authorized!');
		 }

	},
	editPost: function (postID, title, message, postBody) {
		// check if user has role 'admin'
		if (Roles.userIsInRole(Meteor.user(),'admin')) {
			Posts.update(postID, {
				$set:{
					Title: title,
					Message: message,
					Body: postBody				
				}
			});
		 } else {
		 	throw new Meteor.Error('Not Authorized!');
		 }		

	},
	deletePost: function (postID) {
		// check if user has role 'admin'
		if (Roles.userIsInRole(Meteor.user(),'admin')) {
			Posts.remove(postID);
		 } else {
		 	throw new Meteor.Error('Not Authorized!');
		 }		

	}
});