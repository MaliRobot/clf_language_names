app.controller('MainController', function($scope, $routeParams, json_fetcher) { 
    $scope.title = 'Names of languages'; 
    $scope.search = undefined;  
    $scope.result = undefined;
    $scope.languages = undefined;

    $scope.findValue = function(search) { 
        if ($scope.search !== undefined) {
            $scope.languages = json_fetcher.lookup_clf(search); 
      	    console.log($scope.languages, $scope.search);    
            angular.forEach($scope.languages, function(value, key) {
                if (key.toLowerCase() === search.toLowerCase()) {
                    $scope.result = $scope.languages[key];
                }
            });
        }
    };
  
});
