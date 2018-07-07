angular.module('vdsom', ['minhasDiretivas', 'ngAnimate',
                          'ngRoute'])
.config(function($routeProvider) {

    $routeProvider.when('/nomes', {
        templateUrl:'partials/principal.html',
        controller:'NomesController'
    });

    $routeProvider.when('/nomes/new', {
        templateUrl: 'partials/nome.html',
        controller:'NomesControler'
    });
});                      