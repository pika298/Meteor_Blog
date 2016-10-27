Template.EditPosts.events({

	'submit #editPost': function(){
		event.preventDefault();

		var title = event.target.postTitle.value;
		var message = event.target.postMessage.value;

		Meteor.call('editPost', this._id, title, message, function (error) {
			if (!error) {
				Router.go('/admin/posts');				
			}
		});

	}
});
