angular.module('vdsom').controller('GruposController', function($scope, $http){
    $scope.grupos = [];

    $http.get('/grupos')
    .success(function(grupos){
        $scope.grupos = grupos;
    })
    .error(function(erro){
        console.log(erro);
    });
    
});