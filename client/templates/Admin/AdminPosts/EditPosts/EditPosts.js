Template.EditPosts.events({
	'submit #editPost': function(){
		event.preventDefault();

		var title = event.target.postTitle.value;
		var message = event.target.postMessage.value;

		Posts.update(this._id, {
			$set:{
				Title: title,
				Message: message				
			}
		});

		Router.go('/admin/posts');
	}
});
