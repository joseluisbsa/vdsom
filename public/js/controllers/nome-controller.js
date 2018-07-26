angular.module('vdsom').controller('NomeController', 
function($scope, $http, $routeParams) {
    
    $scope.nome = {};
    $scope.mensagem = '';

    if($routeParams.nomeId){
        $http.get('url/uri' + $routeParams.nomeId)
        .success(function(nome){
            // $scope.nome = nome;
        })
        .error(function(erro){
            console.log(erro);
            //$scope.mensagem = "Erro ao buscar foto";
        })
    }

    $scope.salvarNome = function() {
        if($scope.formulario.$valid) {
            if($scope.nome.id){
                $http.put('url/uri' + $scope.nome.id, $scope.nome)
                .success(function(){
                    //mensagem
                })
                .error(function(erro){
                    console.log(erro);
                    //mensagem
                })
            }
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