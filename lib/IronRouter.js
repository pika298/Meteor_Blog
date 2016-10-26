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

// AdminPanel
Router.route('/admin', function () {
  this.render('AdminPanel');
});

// AdminPosts
Router.route('/admin/posts', function () {
  this.render('AdminPosts');
});

// AdminPosts - editPost
Router.route('/admin/posts/:_id', function () {
  this.render('EditPosts', {
  	data: function() { return Posts.findOne({_id: this.params._id}); }
  });
});
