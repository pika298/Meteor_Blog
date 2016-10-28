// check server/publish/PostsPublish.js
Template.AdminAddPost.events({
	'submit #addPost': function(){
		event.preventDefault();

		var title = event.target.postTitle.value;
		var message = event.target.postMessage.value;
		// summernote API
		var postBody = $('#summernote').summernote('code');

		// console.log(postBody);


		Meteor.call('addPost', title, message, postBody, function (error) {	
			if (!error) {
				Router.go('/showposts');				
			}		
		});

	}
});

// everytime when template rendered
// active summernote text editor
// https://atmospherejs.com/summernote/summernote

Template.AdminAddPost.onRendered(function () {
	$(document).ready(function() {
	  $('#summernote').summernote();
	});
});


