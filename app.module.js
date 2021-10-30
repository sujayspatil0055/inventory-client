var app = angular.module('inventory', [
        'ngRoute'
    ])
    .config(['$locationProvider', "$httpProvider", 
        function($locationProvider, $httpProvider) {
            // location provider
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
            $locationProvider.hashPrefix("");

            // http provider
            // $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
            $httpProvider.defaults.headers.common = { 'Content-type':'application/json' };
        }
    ]);

