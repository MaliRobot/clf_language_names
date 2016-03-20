app.service('json_fetcher', function($http) {
    var languages = undefined;
    var other_languages = undefined;
    this.lookup_clf = function (search) {
        $http.get('/clf_language_names/js/clf/' + search + '.json')
        .success(function (data) {
            languages = data;                
        })
        .error(function(data,status,error,config){
            languages = [{heading:"Error",description:"Could not load json data"}];
        });
        return languages;
    }
    this.lookup_other = function (search) {
        $http.get('/clf_language_names/js/clf_other/' + search + '.json')
        .success(function (data) {
            other_languages = data;                
        })
        .error(function(data,status,error,config){
            other_languages = [{heading:"Error",description:"Could not load json data"}];
        });
        return other_languages;
    }
    this.list_clf = function () {
        $http.get('/clf_language_names/js/clf/clf_list.json')
        .success(function (data) {
            languages = data['clf'];            
        })
        .error(function(data,status,error,config){
            languages = [{heading:"Error",description:"Could not load json data"}];
        });
        console.log(languages);
        return languages;
    }
    this.list_other = function () {
        $http.get('/clf_language_names/js/clf/clf_other.json')
        .success(function (data) {
            languages = data['clf_other'];            
        })
        .error(function(data,status,error,config){
            languages = [{heading:"Error",description:"Could not load json data"}];
        });
        console.log(languages);
        return languages;
    }
});
