app.controller("RegisterController", ['userService', function (userService) {
    var self = this;

    self.registerUser = function () {

        console.log(self.userModal);

        var response = userService.registerUser(self.userModal);

        response.then(function successCallback(response) {
            console.log(response);
            self.errorText = "";
            let responseData = response.data;
            // console.log(responseData);
            if (responseData.status == 'fail') {
                console.log(responseData.message);
                self.errorText = responseData.message;
                return;
            }

            console.log("register successfully");

        }, function errorCallback(error) {
            console.log(error);
        })

    };

}]);