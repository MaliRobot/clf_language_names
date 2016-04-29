app.controller('MainController', ['$scope', 'json_fetcher', function($scope, json_fetcher) { 
    $scope.title = 'Names of languages'; 
    $scope.search = null;  
    $scope.result = null;
    $scope.lang = null;

    $scope.findValue = function(search) { 
        json_fetcher.lookup_clf(search[0].toUpperCase() + search.slice(1)).then(function(data){
            $scope.result = data;
        });             
        if ($scope.result != null) {
            $scope.lang = Object.keys($scope.result)[0]; 
        } 
    };

    $scope.langDefined = function() {
        return ($scope.lang != null);
    }
  
}]);
