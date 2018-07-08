angular.module('vdsom').controller('NomeController', 
function($scope, $http) {
    
    $scope.nome = {};
    $scope.mensagem = '';

    $scope.salvarNome = function() {
        if($scope.formulario.$valid) {
            $http.post('/alunos', $scope.nome)
            .success(function() {
                $scope.nome = {};
                $scope.mensagem = 'Foto incluída com sucesso';
            })
            .error(function(erro){
                $scope.mensagem = 'Não foi possível incluir a foto';
                console.log(erro);
            });
        }
    };
})