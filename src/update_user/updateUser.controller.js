app.controller("UpdateUserController", ['userService', function (userService) {
    
    var self = this;

    self.updateUser = function () {
        
        console.log(self.userModal);

        var response = userService.updateUser(self.userModal);

        response.then(function successCallback(response) {
            console.log('response');
            self.errorText = "";
            let responseData = response.data;
            if (responseData.status == 'fail') {
                self.errorText = responseData.message;
                return;
            }
            console.log("update success");
        }, function errorCallback(error) {
            console.log(error);
        });

    };

}]);