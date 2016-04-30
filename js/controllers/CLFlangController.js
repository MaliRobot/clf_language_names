app.controller('CLFlangController', ['$scope', '$timeout', 'json_fetcher', function($scope, $timeout, json_fetcher) { 
    $scope.title = 'Names of Wikipedia languages'; 
    $scope.langTitle = null;
    $scope.lang = null;
    $scope.res = null;

    json_fetcher.list_clf().then(function(data){
        $scope.languages = data;
    });             

    $scope.showLanguage = function(key) {
        json_fetcher.lookup_clf(key).then(function(data){
            $scope.lang = data;
        });

        $scope.langTitle = key;
    };

    $scope.langDefined = function() {
        return ($scope.lang != null);
    }

    $scope.has_other = function() {
        if ($scope.lang != null) {
            if (Object.keys($scope.lang[$scope.langTitle].other).length === 0) {
                console.log('false');
                return false;
            } else {
                return true;
            }
        }
    }


}]);

