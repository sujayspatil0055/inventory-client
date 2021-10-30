app.controller("RegisterController", ['loginService', function (loginService) {
    var self = this;

    self.register = function () {

        var userData = {

        };

        var response = loginService.registerUser(userData);

        response.then(function successCallback(response) {
            console.log(response);
        }, function errorCallback(error) {
            console.log(error);
        })

    };

}]);