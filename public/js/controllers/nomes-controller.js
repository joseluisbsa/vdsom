angular.module('vdsom').controller('NomesController',
    function ($scope, recursoNome) {

        $scope.nomes = [];
        $scope.filtro = '';
        $scope.mensagem = '';
        
        recursoNome.query(function (nomes) {
            $scope.nomes = nomes;
        }, function (erro) {
            console.log(erro);
        });

        $scope.remover = function (nome) {

            recursoNome.delete({ nomeId: nome.id }, function () {

                const index = $scope.nomes.indexOf(nome);
                $scope.fotos.splice(index, 1);
                $scope.mensagem = `Nome ${nome.nome} foi removido com sucesso!`;

            }, function (erro) {
                console.log(erro);
                $scope.mensagem = `Não foi possivel remover a foto ${nome.nome}`;
            });
        };
    });