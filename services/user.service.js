app.factory("userService", [ "$http", function ($http){
    var serviceInstance = [];

    // serviceInstance.getUser = function (userId) {
    //     return $http.get('', {});
    // };

    serviceInstance.loginUser = function (userData) {
        console.log(userData);
        // return $http.post(NODE_API_URL + '/user/get_user_by_email/' + userData.email , { data: userData });
        return $http.post(NODE_API_URL + '/user/login' , { data: userData });
    };

    
    return serviceInstance;
}]);