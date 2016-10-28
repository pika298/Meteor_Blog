Template.EditPosts.events({

	'submit #editPost': function(){
		event.preventDefault();

		var title = event.target.postTitle.value;
		var message = event.target.postMessage.value;
		// summernote API
		var postBody = $('#summernote').summernote('code');

		Meteor.call('editPost', this._id, title, message, postBody, function (error) {
			if (!error) {
				Router.go('/admin/posts');				
			}
		});

	}
});

// active summernote text editor
Template.EditPosts.onRendered(function () {
	$(document).ready(function () {
		$('#summernote').summernote();
	});
});
