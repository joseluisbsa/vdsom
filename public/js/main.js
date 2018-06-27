angular.module('vdsom', ['minhasDiretivas', 
                        'ngAnimate', 
                        'ngRoute'])
.config(function($routeProvider) {

    $routeProvider.when('/nomes', {
        templateUrl:'partials/principal.html',
        controller:'NomesController'
    });
});                      