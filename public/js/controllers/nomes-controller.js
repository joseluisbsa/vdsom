angular.module('vdsom').controller('NomesController', 
                                    function($scope, $http){

    $scope.nomes = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    $http.get('/nomes')
    .success( nomes => {
        $scope.nomes = nomes;
    })
    .error(erro => {
        console.log(erro)
    });

    $scope.remover = function(nome){
        $http.delete('url/uri' + nome.id)
        .success(function(){
            const index = $scope.nomes.indexOf(nome);
            $scope.fotos.splice(index, 1);
            $scope.mensagem = `Nome ${nome.nome} foi removido com sucesso!`;
        })
        .error(function(erro){
            console.log(erro);
            $scope.mensagem = `Não foi possivel remover a foto ${nome.nome}`;
        })
    }
});