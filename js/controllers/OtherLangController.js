app.controller('OtherLangController', ['$scope', 'json_fetcher', function($scope, json_fetcher) { 
    $scope.title = 'List of languages not featured on Wikipedia'; 
    $scope.other_lang = null;
    $scope.langTitle = null;
    $scope.other_languages = null;

    if($scope.other_languages == null){
        $scope.other_languages = json_fetcher.list_other();                
    };

    $scope.showLanguage = function(key) {
  	    $scope.other_lang = json_fetcher.lookup_other(key);
  	    $scope.langTitle = key;
    };

    $scope.langDefined = function() {
        return ($scope.other_lang != null);
    }
}]);