app.controller('OtherLangController', function($scope, $routeParams, json_fetcher) { 
    $scope.title = 'List of languages not featured on Wikipedia'; 
    $scope.lang = undefined;
    $scope.langTitle = undefined;
    $scope.other_languages = undefined;

    if($scope.other_languages == undefined){
        $scope.other_languages = json_fetcher.list_other();                
    };

    $scope.showLanguage = function(key) {
  	    $scope.lang = $scope.other_languages[key];
  	    $scope.langTitle = key;
        console.log($scope.lang);
    };

    $scope.langDefined = function() {
        return ($scope.lang != "undefined");
    }
});