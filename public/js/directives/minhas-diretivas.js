angular.module('minhasDiretivas', [])
    .directive('meuPainel', function () {
        let ddo = {};

        ddo.restric = "AE";

        ddo.scope = {
            nome: '@'
        };

        ddo.transclude = true;

        ddo.templateUrl = 'js/directives/meu-painel.html';

        return ddo;
    });