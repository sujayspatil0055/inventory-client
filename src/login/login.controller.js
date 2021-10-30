app.controller("LoginController", ["loginService", function(loginService) {
    var self = this;

    self.loginUser = function () {

        var userData = {
            email: self.email,
            password: self.password
        };

        var response = loginService.loginUser(userData);
        // handle http promise
        response.then( function successCallback (response) {
            console.log(response);
        }, function errorCallback(error) {
            console.log(error);
        });
    };


}]);