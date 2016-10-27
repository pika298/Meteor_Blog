//Router.route('/', function () {
//  this.render('Home', {
//    data: function () { return Items.findOne({_id: this.params._id}); }
//  });
//});

// Config, Layout...
Router.configure({
	layoutTemplate: 'AppLayout'
});

// Home
Router.route('/', function () {
  this.render('Home');
});

// AddPost
Router.route('/addpost', function () {
  this.render('AddPost');
});

// ShowPosts
Router.route('/showposts', function () {
  this.render('ShowPosts');
});

// UserControlPanel
Router.route('/ucp', function () {

 if (Meteor.userId()) {
  	this.render('UserControlPanel');
 } else {
 	Router.go('/');
 }

});

// AdminPanel
Router.route('/admin', function () {

 if (Roles.userIsInRole(Meteor.user(),'admin')) {
  	this.render('AdminPanel');
 } else {
 	Router.go('/');
 }

});

// AdminPosts
Router.route('/admin/posts', function () {

	if (Roles.userIsInRole(Meteor.user(),'admin')) {
	   this.render('AdminPosts');	
	 } else {
	 	Router.go('/');
	 }

});

// AdminPosts - editPost
Router.route('/admin/posts/:_id', function () {

	if (Roles.userIsInRole(Meteor.user(),'admin')) {
	 	this.render('EditPosts', {
		  	data: function() { return Posts.findOne({_id: this.params._id}); }
		  });
	 } else {
	 	Router.go('/');
	 }

});

