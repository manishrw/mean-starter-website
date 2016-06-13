angular.module('MainCtrl', []).controller('MainController', function($scope) {

	$scope.social = {
		linkedin: 'https://www.linkedin.com/in/manishrw',
		twitter: 'https://twitter.com/manishrw',
		skype: 'skype:manishsvnit007',
		github: 'https://github.com/manishrw/'
	};
	$scope.phone = '+91 88847 15911';
	$scope.address = {street: 'Koramangala, Bangalore - 560047', state: 'KA, India.'};
	$scope.mail = 'manishrw@yahoo.com';

});