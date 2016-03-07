app.controller('LangController', function($scope, $routeParams) { 
  $scope.showLanguage = function(key) {
  	$scope.lang = key;
  };
});