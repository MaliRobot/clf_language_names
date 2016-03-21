app.controller('CLFlangController', ['$scope', '$timeout', 'json_fetcher', function($scope, $timeout, json_fetcher) { 
    $scope.title = 'Names of Wikipedia languages'; 
    // $scope.languages = null;
    $scope.lang = null;
    $scope.res = null;

    json_fetcher.list_clf().then(function(data){
        $scope.languages = data;
    });             

    $scope.showLanguage = function(key) {
        json_fetcher.lookup_clf(key).then(function(data){
            $scope.lang = data;
        });

        if ($scope.lang != null) {
            $scope.langTitle = Object.keys($scope.lang)[0];
        }
    };

    $scope.langDefined = function() {
        return ($scope.lang != null);
    }
}]);

