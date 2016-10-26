Template.AdminPosts.helpers({
	posts: function(){
		return Posts.find();
	}
});

Template.AdminPosts.events({
	'click #deletePost': function () {
		Posts.remove(this._id);
	},
	'click #editPost': function () {
		Router.go('/admin/posts/'+this._id);
	}
});
