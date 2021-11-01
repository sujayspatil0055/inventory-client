app.controller("LoginController", ["userService", function(userService) {
    var self = this;

    self.loginUser = function () {

        // clear error
        self.errorText = "";

        // var userData = {
        //     email: self.email,
        //     password: self.password
        // };

        var response = userService.loginUser(self.userModal);
        // handle http promise
        response.then( function successCallback (response) {
            console.log(response);
            console.log(response.data);
            let responseData = response.data;
            console.log(responseData);
            if (responseData.status == 'fail') {
                console.log(responseData.message);
                self.errorText = responseData.message;
                return;
            }

            let userData = JSON.stringify({
                email: responseData.data.email,
                full_name: responseData.data.full_name,
                _id: responseData.data._id
            });
            console.log(userData);
            setCookie('user_data', userData);
            
            //
            let uc = getCookie('user_data');
            console.log(uc);
            if (uc != "") {
                console.log(uc);
            }
            console.log("Login Successfull");
        }, function errorCallback(error) {
            console.log(error);
        });
    };

    function setCookie(cookieName, cookieValue) {
        const d = new Date();
        d.setTime(d.getTime() + (10*24*60*60*1000));// 10 = days and convert to miliseconds
        
        document.cookie = cookieName + '=' + cookieValue + '; expires=' + d.toUTCString() + '; domain=.' + window.location.host.toString() + '; path=/;';
    }

    function getCookie(cookieName) {
        let name = cookieName + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
            c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
            }
        }

        return "";
    }

    function forgetCookie(cookieName) {
        document.cookie = [cookieName, '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/; domain=.', window.location.host.toString()].join('');
    }

}]);