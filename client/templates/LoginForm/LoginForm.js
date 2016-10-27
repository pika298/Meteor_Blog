Template.LoginForm.events({
	'submit #loginForm': function () {
		event.preventDefault();

		var username = event.target.username.value;
		var password = event.target.password.value;

		Meteor.loginWithPassword(username, password);

	},
	'submit #registerForm': function () {
		event.preventDefault();

		var username = event.target.RegUsername.value;
		var email = event.target.RegEmail.value;
		var password = event.target.RegPassword.value;

		Accounts.createUser({
			email: email,
			password: password,
			profile:{name:username}
		});
	}
});