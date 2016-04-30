app.factory('json_fetcher', function($http, $q) {
    var response = {};
    var languages = null;
    var lang = null;
    var other_lang = null;
    var other_languages = null;
    
    response.lookup_clf = function (search) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: '/clf_language_names/js/clf/' + search + '.json'
        })
        .success(function (data) {
            deferred.resolve(data);            
        })
        .error(function(){
            deferred.reject('Error');
        });
        return deferred.promise;
    }
    response.lookup_other = function (search) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: '/clf_language_names/js/clf_other/' + search + '.json'
        })
        .success(function (data) {
            deferred.resolve(data);            
        })
        .error(function(){
            deferred.reject('Error');
        });
        return deferred.promise;
    }
    response.list_clf = function () {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: '/clf_language_names/js/clf/clf_list.json'
        })
        .success(function (data) {
            deferred.resolve(data['clf']);            
        })
        .error(function(){
            deferred.reject('Error');
        });
        return deferred.promise;
    }
    response.list_other = function () {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: '/clf_language_names/js/clf_other/clf_other.json'
        })
        .success(function (data) {
            deferred.resolve(data['clf_other']);            
        })
        .error(function(){
            deferred.reject('Error');
        });
        return deferred.promise;
    }

    return response;
});
