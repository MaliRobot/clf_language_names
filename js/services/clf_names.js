app.service('clf_names', function(http) {
    var languages = undefined;
    this.list_clf = function () {
        $http.get('/clf_language_names/js/clf/clf_list.json')
        .success(function (data) {
            languages = data;                
        })
        .error(function(data,status,error,config){
            languages = [{heading:"Error",description:"Could not load json data"}];
        });
        return languages;
    }
});