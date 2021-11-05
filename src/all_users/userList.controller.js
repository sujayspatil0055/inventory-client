app.controller("UserListController", [ "$scope", "userService", function ($scope, userService) {

    var self = this;

    // $scope.users = [];
    self.users = [];

    self.getAllUsers = function () {
        let response = userService.getAllUsers();
        
        response.then( function successCallback (response) {
            console.log(response);
            // $scope.users = (response.data.data.length > 0) ? response.data.data : [];
            self.users = (response.data.data.length > 0) ? response.data.data : [];
            console.log(self.users);
        }, function errorCallback(error) {
            console.log(error);
        });
    };

    self.updateUserModal = function (userId) {
        console.log(self.users);
        console.log(userId);

        let user = self.users.find( u => u._id == userId);
        
        // console.log(user);
        
        self.userModal = {
            email: user.email,
            full_name: user.full_name,
            _id: user._id
        };

        var modalElement = angular.element("#userUpdateModal");
        if (modalElement) {
            modalElement.modal("show");
        }
    };

    self.updateUser = function () {

        let uData = {
            full_name: self.userModal.full_name,
            _id: self.userModal._id
        }

        var response = userService.updateUser(uData);

        response.then(function successCallback(response) {
            self.errorText = "";
            let responseData = response.data;
            if (responseData.status == 'fail') {
                self.errorText = responseData.message;
                return;
            }
            self.users.find( u => {
                if(u._id == responseData.data._id) {
                    u.full_name = responseData.data.full_name;
                }
            });
        
        }, function errorCallback(error) {
            console.log(error);
        });

    };
}]);