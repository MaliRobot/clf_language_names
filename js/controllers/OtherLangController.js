app.controller('OtherLangController', function($scope, $http, $routeParams, json_fetcher) { 
    $scope.title = 'List of languages not featured on Wikipedia'; 
    $scope.lang = undefined;
    $scope.langTitle = undefined;
    $scope.other_languages = undefined;

    if($scope.other_languages == undefined){
        console.log('main');
        $scope.other_languages = json_fetcher.lookup_other();                
    };

    $scope.showLanguage = function(key) {
  	    $scope.lang = $scope.other_languages[key];
  	    $scope.langTitle = key;
    };

    $scope.langDefined = function() {
  	    console.log($scope.lang == "undefined");
        return ($scope.lang != "undefined");
    }
});