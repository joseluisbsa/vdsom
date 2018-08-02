angular.module('meusServicos', ['ngResource'])
    .factory('recursoNome', function ($resource) {
        return $resource('/nomes/:nomeId', null, {
            update: {
                method: 'PUT'
            }
        });
    })
    .factory('cadastroDeNomes', function (recursoNome, $q) {
        let servico = {};

        servico.cadastrar = function (nome) {
            return $q(function (resolve, reject) {
                if (nome.id) {
                    recursoNome.update({ nomeId: nome.id }, nome, function () {
                        resolve({
                            mensagem: `Nome ${nome.nome} atualizada com sucesso`,
                            inclusao: false
                        });
                    }, function (erro) {
                        console.log(erro);
                        reject({
                            mensagem: `Não foi possivel alterar o nome ${nome.nome}`
                        });
                    });
                } else {
                    recursoNome.save(nome, function(){
                        resolve({
                            mensagem: `Nome ${nome.nome} incluida com sucesso`,
                            inclusao: true
                        });
                    }, function(erro){
                        console.log(erro);
                        reject({
                            mensagem: `Não foi possivel incluir o nome ${nome.nome}`
                        });
                    });
                }
            });
        };

        return servico;
    });
