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