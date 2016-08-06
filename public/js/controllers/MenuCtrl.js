angular.module('find-sampa')
  .controller('MenuCtrl',
      ['$scope','$state'
      , function($scope, $state){


  $scope.mensagemLogin = {
    erro: ''
  };

  $scope.acessarAdmin = function(form) {

    if(form.login == 'tiago' && form.senha == 'admin'){
      $state.go('dashboard');
    }else {
      $scope.mensagemLogin.erro = 'Login e senha inválidos';
      $timeout(function(){
        $scope.mensagemLogin.erro = '';
      }, 3000);
    }
  }


}]);
