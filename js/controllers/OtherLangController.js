app.controller('OtherLangController', function($scope, $http, $routeParams) { 
  $scope.title = 'List of languages not featured on Wikipedia'; 
  $scope.lang = undefined;
  $scope.langTitle = undefined;

  $http.get('js/clf_other.json')
    .success(function (data) {
        $scope.other_languages = data;                
    })
    .error(function(data,status,error,config){
        $scope.other_languages = [{heading:"Error",description:"Could not load json data"}];
    });

  $scope.showLanguage = function(key) {
  	$scope.lang = $scope.other_languages[key];
  	$scope.langTitle = key;
  };

  $scope.langDefined = function() {
  	console.log($scope.lang === "undefined");
    return ($scope.lang !== "undefined");
  }
});