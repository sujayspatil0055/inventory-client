app.controller("LoginController", ["userService", function(userService) {
    var self = this;

    self.loginUser = function () {

        // var userData = {
        //     email: self.email,
        //     password: self.password
        // };

        var response = userService.loginUser(self.userModal);
        // handle http promise
        response.then( function successCallback (response) {
            console.log(response);
        }, function errorCallback(error) {
            console.log(error);
        });
    };


}]);