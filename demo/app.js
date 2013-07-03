angular.module('App', ['flashr'])
	.config(['$routeProvider', 
		function($routeProvider) {
		  $routeProvider
			.when('/', {templateUrl: '/demo/partials/one.html',   controller: 'OneCtrl'})
			.when('/two', {templateUrl: '/demo/partials/two.html', controller: 'TwoCtrl'})
			.otherwise({redirectTo: '/'}
		);
}]);