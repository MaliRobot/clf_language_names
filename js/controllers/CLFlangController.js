app.controller('CLFlangController', function($scope, $http, $routeParams) { 
  $scope.title = 'Names of Wikipedia languages'; 
  $scope.languages = undefined;

  if($scope.languages === undefined){
    $http.get('js/clf.json')
      .success(function (data) {
          $scope.languages = data;                
      })
      .error(function(data,status,error,config){
          $scope.languages = [{heading:"Error",description:"Could not load json data"}];
      });
  };

  $scope.showLanguage = function(key) {
  	$scope.lang = $scope.languages[key];
  	$scope.langTitle = key;
  };

  $scope.langDefined = function() {
  	console.log($scope.lang === "undefined");
    return ($scope.lang !== "undefined");
  }
});