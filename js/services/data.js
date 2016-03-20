app.service('json_fetcher', function($http) {
    var languages = undefined;
    var lang = undefined;
    var other_lang = undefined;
    var other_languages = undefined;
    this.lookup_clf = function (search) {
        $http.get('/clf_language_names/js/clf/' + search + '.json')
        .success(function (data) {
            lang = data;                
        })
        .error(function(data,status,error,config){
            lang = [{heading:"Error",description:"Could not load json data"}];
        });
        return lang;
    }
    this.lookup_other = function (search) {
        $http.get('/clf_language_names/js/clf_other/' + search + '.json')
        .success(function (data) {
            other_lang = data;                
        })
        .error(function(data,status,error,config){
            other_lang = [{heading:"Error",description:"Could not load json data"}];
        });
        return other_lang;
    }
    this.list_clf = function () {
        $http.get('/clf_language_names/js/clf/clf_list.json')
        .success(function (data) {
            languages = data['clf'];            
        })
        .error(function(data,status,error,config){
            languages = [{heading:"Error",description:"Could not load json data"}];
        });
        return languages;
    }
    this.list_other = function () {
        $http.get('/clf_language_names/js/clf_other/clf_other.json')
        .success(function (data) {
            other_languages = data['clf_other'];           
        })
        .error(function(data,status,error,config){
            other_languages = [{heading:"Error",description:"Could not load json data"}];
        });
        return other_languages;
    }
});
