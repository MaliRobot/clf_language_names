app.controller('CLFlangController', function($scope, $routeParams, json_fetcher) { 
    $scope.title = 'Names of Wikipedia languages'; 
    $scope.languages = undefined;
    $scope.lang = undefined;
    $scope.res = undefined;

    if($scope.languages == undefined){
        $scope.languages = json_fetcher.list_clf(); 
        console.log($scope.languages);
    };              

    $scope.showLanguage = function(key) {
        $scope.lang = json_fetcher.lookup_clf(key);
        $scope.langTitle = key;
    };

    $scope.langDefined = function() {
        console.log($scope.lang !== "undefined");
        return ($scope.lang !== "undefined");
    }
});

