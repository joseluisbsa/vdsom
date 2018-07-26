angular.module('vdsom', ['minhasDiretivas', 'ngAnimate',
                          'ngRoute'])
.config(function($routeProvider) {

    $routeProvider.when('/nomes', {
        templateUrl:'partials/principal.html',
        controller:'NomesController'
    });

    $routeProvider.when('/nomes/new', {
        templateUrl: 'partials/nome.html',
        controller:'NomeController'
    });

    $routeProvider.when('/nomes/edit/:nomeId', {
        templateUrl: 'partials/nome.html',
        controller:'NomeController'
    });

    $routeProvider.otherwise({redirectTo: '/nomes'});
});                      