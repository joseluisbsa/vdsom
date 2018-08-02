angular.module('vdsom').controller('NomeController',
    function ($scope, cadastroDeNomes, recursoNome, $routeParams) {

        $scope.nome = {};
        $scope.mensagem = '';

        if ($routeParams.nomeId) {

            recursoNome.get({ nomeId: $routeParams.nomeId }, function (nome) {
                // $scope.nome = nome;
            }, function (erro) {
                console.log(erro);
                //$scope.mensagem = "Erro ao buscar foto";
            })
        }

        $scope.salvarNome = function () {
            if ($scope.formulario.$valid) {
                cadastroDeNomes.cadastrar($scope.nome)
                    .then(function (dados) {
                        $scope.mensagem = dados.mensagem;
                        if (dados.inclusa) $scope.nome = {};
                    })
                    .catch(function (dados) {
                        $scope.mensagem = dados.mensagem;
                    })
            }
        };
    })