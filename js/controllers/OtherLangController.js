app.controller('OtherLangController', ['$scope', 'json_fetcher', function($scope, json_fetcher) { 
    $scope.title = 'List of languages not featured on Wikipedia'; 
    $scope.other_lang = null;
    $scope.langTitle = null;
    $scope.other_languages = null;

    json_fetcher.list_other().then(function(data){
        $scope.other_languages = data;
    });      

    $scope.showLanguage = function(key) {
  	    json_fetcher.lookup_other(key).then(function(data){
  	        $scope.other_lang = data;
        });
        $scope.langTitle = key;
    }

    $scope.langDefined = function() {
        return ($scope.other_lang != null);
    }
}]);