angular.module('vdsom').controller('NomesController', 
                                    function($scope, $http){

    $scope.nomes = [];
    $scope.filtro = '';

    $http.get('/test')
    .success( nomes => {
        $scope.nomes = nomes;
    })
    .error(erro => {
        console.log(erro)
    });
});