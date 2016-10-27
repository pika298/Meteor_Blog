Template.AdminAddPost.events({
	'submit #addPost': function(){
		event.preventDefault();

		var title = event.target.postTitle.value;
		var message = event.target.postMessage.value;

		Meteor.call('addPost', title, message, function (error) {	
			if (!error) {
				Router.go('/showposts');				
			}		
		});

	}
});