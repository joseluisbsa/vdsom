angular.module('vdsom').controller('NomeController', 
function($scope) {
    
    $scope.nome = {};

    $scope.salvarNome = function() {
        console.log($scope.nome)
    };
})