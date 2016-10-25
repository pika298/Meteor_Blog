//Router.route('/', function () {
//  this.render('Home', {
//    data: function () { return Items.findOne({_id: this.params._id}); }
//  });
//});

Router.route('/', function () {
  this.render('AppLayout');
});

// AddPost
Router.route('/addpost', function () {
  this.render('AddPost');
});