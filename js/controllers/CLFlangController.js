app.controller('CLFlangController', function($scope, $http, $routeParams, json_fetcher) { 
    $scope.title = 'Names of Wikipedia languages'; 
    $scope.languages = undefined;
    $scope.lang = undefined;

    if($scope.languages == undefined){
        console.log('main');
        $scope.languages = json_fetcher.lookup_clf();                
    };

    $scope.showLanguage = function(key) {
  	    $scope.lang = $scope.languages[key];
  	    $scope.langTitle = key;
    };

    $scope.langDefined = function() {
  	    console.log($scope.lang === "undefined");
        return ($scope.lang !== "undefined");
    }
});