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
		})
		.when('/travel', {
			templateUrl: 'views/travel.html',
			controller: 'TravelController'	
		});

	$locationProvider.html5Mode(true);

}]);