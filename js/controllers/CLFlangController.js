app.controller('CLFlangController', function($scope, json_fetcher) { 
    $scope.title = 'Names of Wikipedia languages'; 
    $scope.languages = undefined;
    $scope.lang = undefined;
    $scope.res = undefined;

    if($scope.languages == undefined){
        $scope.languages = json_fetcher.list_clf(); 
    };              

    $scope.showLanguage = function(key) {
        $scope.lang = json_fetcher.lookup_clf(key);
        console.log($scope.lang);
        if ($scope.lang != undefined) {
            $scope.langTitle = Object.keys($scope.lang)[0];
        }
    };

    $scope.langDefined = function() {
        return ($scope.lang != "undefined");
    }
});

