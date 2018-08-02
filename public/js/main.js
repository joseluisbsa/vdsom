// vdson é o modulo principal que depende dos modulos dentro de ['...']
angular.module('vdsom', ['minhasDiretivas', 'ngAnimate',
                          'ngRoute', 'meusServicos'])
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