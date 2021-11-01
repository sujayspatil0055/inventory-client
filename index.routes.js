app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: './src/home/home.html',
        controller: 'HomeController'
    })
    .when('/login', {
        templateUrl: './src/login/login.html',
        controller: 'LoginController'
    })
    .when('/register', {
        templateUrl: './src/register/register.html',
        controller: 'RegisterController'
    })
    .when('/update-user', {
        templateUrl: './src/update_user/updateUser.html',
        controller: 'UpdateUserController'
    })
    .otherwise('/');
}]);