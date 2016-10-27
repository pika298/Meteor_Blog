Template.AdminPosts.helpers({
	posts: function(){
		return Posts.find();
	}
});

Template.AdminPosts.events({
	'click #deletePost': function () {
		Meteor.call('deletePost', this._id);
	},
	'click #editPost': function () {
		Router.go('/admin/posts/'+this._id);
	}
});
