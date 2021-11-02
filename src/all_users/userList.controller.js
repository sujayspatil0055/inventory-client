app.controller("UserListController", [ "userService", function (userService) {

    var self = this;

    self.getAllUsers = function () {
        let response = userService.getAllUsers();
        
        response.then( function successCallback (response) {
            console.log(response);
        }, function errorCallback(error) {
            console.log(error);
        });
    };

}]);