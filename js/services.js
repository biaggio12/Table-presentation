myApp
    .factory('MyService', function($http){
        return {
            getdata: function(){
                return $http.get('dane.json');
            }
        };
    });