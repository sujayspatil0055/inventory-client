var app = angular.module('inventory', [
        'ngRoute'
    ])
    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $locationProvider.hashPrefix("");
    }]);

