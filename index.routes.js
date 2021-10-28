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
    // .when('register')
    .otherwise('/');
}]);