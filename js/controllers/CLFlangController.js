app.controller('CLFlangController', ['$scope', '$timeout', 'json_fetcher', function($scope, $timeout, json_fetcher) { 
    $scope.title = 'Names of Wikipedia languages'; 
    $scope.languages = null;
    $scope.lang = null;
    $scope.res = null;

    if($scope.languages == null){
        $scope.languages = json_fetcher.list_clf(); 
    };              

    $scope.showLanguage = function(key) {
        $scope.lang = json_fetcher.lookup_clf(key);
        if ($scope.lang != null) {
            $scope.langTitle = Object.keys($scope.lang)[0];
        }
    };

    $scope.langDefined = function() {
        return ($scope.lang != null);
    }
}]);

