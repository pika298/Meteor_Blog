Template.AddPost.events({
	'submit #addPost': function(){
		event.preventDefault();

		var title = event.target.postTitle.value;
		var message = event.target.postMessage.value;

		Posts.insert({
			Title: title,
			Message: message
		});
	}
});