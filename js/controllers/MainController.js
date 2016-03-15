app.controller('MainController', function($scope, $http, $routeParams) { 
  $scope.title = 'Names of languages'; 
  $scope.search = undefined;  
  $scope.result = undefined;
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

  $scope.findValue = function(search) { 
  	console.log($scope.languages, $scope.search);    
    angular.forEach($scope.languages, function(value, key) {
        if (key.toLowerCase() === search.toLowerCase()) {
            $scope.result = $scope.languages[key];
        }
        console.log($scope.result);
    });
  };
  
});
