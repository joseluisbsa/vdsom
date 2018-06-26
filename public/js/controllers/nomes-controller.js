angular.module('vdsom').controller('NomesController', 
                                    function($scope, $http){

    $http.get('/test')
    .success( nomes => {
        $scope.nomes = nomes;
    })
    .error(erro => {
        console.log(erro)
    });
});