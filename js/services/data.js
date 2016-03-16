app.service('json_fetcher', function($http) {
    var languages = undefined;
    var other_languages = undefined;
    this.lookup_clf = function () {
        $http.get('/clf_language_names/js/clf.json')
        .success(function (data) {
            languages = data;                
        })
        .error(function(data,status,error,config){
            languages = [{heading:"Error",description:"Could not load json data"}];
        });
        return languages;
    }
    this.lookup_other = function () {
        $http.get('/clf_language_names/js/clf_other.json')
        .success(function (data) {
            other_languages = data;                
        })
        .error(function(data,status,error,config){
            other_languages = [{heading:"Error",description:"Could not load json data"}];
        });
        return other_languages;
    }
});