app.controller('MainController', ['$scope', 'json_fetcher', function($scope, json_fetcher) { 
    $scope.title = null 
    $scope.search = null;  
    $scope.result = null;
    $scope.lang = null;
    $scope.searched = false;

    $scope.findValue = function(search) { 
        json_fetcher.lookup_clf(search[0].toUpperCase() + search.slice(1)).then(function(data){
            $scope.json_data = data;
        });   

        if ($scope.json_data == $scope.result) {
            $scope.title = null;
            $scope.result = null;
            $scope.json_data = null;
            $scope.lang = null;
        } else {
            $scope.result = $scope.json_data;
            $scope.title = search;
        }
                  
        if ($scope.result != null) {
            $scope.lang = Object.keys($scope.result)[0]; 
        } else {
            $scope.lang == null;
        }
        $scope.searched = true;
    };

    $scope.langDefined = function() {
        if ($scope.searched == true) {
            return ($scope.lang == null);
        }
    }
  
}]);
