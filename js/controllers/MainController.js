app.controller('MainController', function($scope, $routeParams, json_fetcher) { 
    $scope.title = 'Names of languages'; 
    $scope.search = undefined;  
    $scope.result = undefined;
    $scope.lang = undefined;

    $scope.findValue = function(search) { 
        $scope.result = json_fetcher.lookup_clf(search[0].toUpperCase() + search.slice(1));
        if ($scope.result != undefined) {
            $scope.lang = Object.keys($scope.result)[0]; 
        }
    };

    $scope.langDefined = function() {
        return $scope.lang != undefined;
    }
  
});
