app.factory("userService", [ "$http", function ($http){
    var serviceInstance = [];

    // serviceInstance.getUser = function (userId) {
    //     return $http.get('', {});
    // return $http.get(NODE_API_URL + '/user/get_user_by_email/' + userData.email , { data: userData });
    // };

    serviceInstance.loginUser = function (userData) {
        // return $http.post(NODE_API_URL + '/user/get_user_by_email/' + userData.email , { data: userData });
        return $http.post(NODE_API_URL + '/user/login' , userData);
    };

    serviceInstance.registerUser = function (userData) {
        return $http.post(NODE_API_URL + '/user/register', userData)
    };

    serviceInstance.updateUser = function (userData) {
        return $http.put(NODE_API_URL + '/user/update', userData);
    };

    serviceInstance.getAllUsers = function () {
        return $http.get(NODE_API_URL + '/user/all');
    };
    
    return serviceInstance;
}]);