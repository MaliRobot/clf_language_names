app.controller('MainController', function($scope, $http, $routeParams) { 
  $scope.title = 'Names of languages'; 
  $scope.search = undefined;  
  $scope.result = undefined;

  $http.get('js/clf.json')
    .success(function (data) {
        $scope.languages = data;                
    })
    .error(function(data,status,error,config){
        $scope.languages = [{heading:"Error",description:"Could not load json data"}];
    });

  $scope.findValue = function(search) { 
  	console.log(search, $scope.search);    
    angular.forEach($scope.languages, function(value, key) {
        if (key === search) {
            $scope.result = $scope.languages[key];
        }
    });
  };
  console.log($scope.result);
});
