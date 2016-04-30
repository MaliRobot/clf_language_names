var $scope, $location;
var app = angular.module('myApp',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){

    $routeProvider
    .when('/',{
      controller: 'MainController',
      templateUrl: 'views/home.html'
    })
    .when('/clf',{
      controller: 'CLFlangController',
      templateUrl: 'views/clf.html',
    })
	  .when('/other',{
      controller: 'OtherLangController',
      templateUrl: 'views/other.html'
    })
    .when('/about',{
      controller: 'AboutController',
      templateUrl: 'views/about.html'
    })
    .otherwise('/');

}]);

