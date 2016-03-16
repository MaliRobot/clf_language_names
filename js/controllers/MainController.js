app.controller('MainController', function($scope, $http, $routeParams, json_fetcher) { 
    $scope.title = 'Names of languages'; 
    $scope.search = undefined;  
    $scope.result = undefined;
    $scope.languages = undefined;

    if($scope.languages == undefined){
        console.log('main');
        $scope.languages = json_fetcher.lookup_clf();                
    };

    $scope.findValue = function(search) { 
  	    console.log($scope.languages, $scope.search);    
        angular.forEach($scope.languages, function(value, key) {
            if (key.toLowerCase() === search.toLowerCase()) {
                $scope.result = $scope.languages[key];
            }
        // console.log($scope.result);
        });
    };
  
});
