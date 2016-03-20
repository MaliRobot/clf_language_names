app.controller('OtherLangController', function($scope, $routeParams, json_fetcher) { 
    $scope.title = 'List of languages not featured on Wikipedia'; 
    $scope.other_lang = undefined;
    $scope.langTitle = undefined;
    $scope.other_languages = undefined;

    if($scope.other_languages == undefined){
        $scope.other_languages = json_fetcher.list_other();                
    };

    $scope.showLanguage = function(key) {
  	    $scope.other_lang = json_fetcher.lookup_other(key);
  	    $scope.langTitle = key;
    };

    $scope.langDefined = function() {
        console.log($scope.other_lang != 'undefined');
        return ($scope.other_lang != "undefined");
    }
});