app.factory("userService", [ "$http", function ($http){
    var serviceInstance = [];

    // serviceInstance.getUser = function (userId) {
    //     return $http.get('', {});
    // };

    serviceInstance.loginUser = function (userData) {
        console.log(userData);
        return $http.post('', { data: userData });
    };

    
    return serviceInstance;
}]);