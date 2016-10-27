// check app.js
Meteor.publish('allPosts', function () {
	return Posts.find();
});