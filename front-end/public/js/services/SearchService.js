angular.module('SearchService', []).factory('Search', ['$http', function($http) {

    return {
        get : function() {
            return $http.get('/api/search');
        },

        create : function(nerdData) {
            return $http.post('/api/search', nerdData);
        },

        delete : function(id) {
            return $http.delete('/api/search/' + id);
        }
    }

}]);
