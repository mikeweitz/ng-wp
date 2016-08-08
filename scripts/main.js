console.log('main.js')

angular
	.module('mm', ['ngRoute'])
	.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .otherwise({
    	redirectTo: '/'
    })
    .when('/', {
        templateUrl: localized.partials + 'main.html',
        // templateUrl: 'http://localhost/mm-wp/wp-content/themes/angular-bootstrap/partials/main.html',
        controller: 'Main'
    })
	})
	.controller('Main', function($scope, $http, $routeParams) {
		console.log('ng main controller');
    $http.get('index.php/wp-json/wp/v2/posts').success(function(res){
    		console.log('response', res)
        $scope.posts = res;
    });
  });

console.log('whelp...', angular.module('mm'));