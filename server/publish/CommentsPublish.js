// check app.js
Meteor.publish('comments', function () {
	return Comments.find();
});