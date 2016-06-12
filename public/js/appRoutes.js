angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/profile', {
			templateUrl: 'views/profile.html',
			controller: 'ProfileController'	
		});

	$locationProvider.html5Mode(true);

}]);