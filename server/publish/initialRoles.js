Meteor.startup(function () {
	if(Meteor.users.find().count() < 1) {

		Roles.addUsersToRoles(id,'admin');
	}
});