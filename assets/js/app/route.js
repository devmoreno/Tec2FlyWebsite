(function () {
    'use strict';

    angular.module('TEC2WEB')
    .config(RouteConfig);
  

    //Inject Dependencies
    RouteConfig.$inject = ['$routeProvider'];

    //Routes
    function RouteConfig($routeProvider) {
        var _rootPath = "Views/Templates/";

        $routeProvider
            .when('/', {
                templateUrl: _rootPath + 'main.html',
                controller: 'mainViewController'
            })
            .when('/login', {
                templateUrl: _rootPath + 'login.html',
                controller: 'loginViewController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();