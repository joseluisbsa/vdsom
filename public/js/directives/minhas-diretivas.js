angular.module('minhasDiretivas', [])
    .directive('meuPainel', function () {
        // directive definition object
        let ddo = {};
        // restricao de uso: 'A' attr 'E' elem
        ddo.restric = "AE";

        ddo.scope = {
            // @nome se refere ao attr do html principal
            // nome: se refere ao {{}} do html da diretiva
            nome: '@nome'
        };
        // para manter tags existentes no html principal
        ddo.transclude = true;
        // uso de base pasta public
        ddo.templateUrl = 'js/directives/meu-painel.html';

        return ddo;
    });