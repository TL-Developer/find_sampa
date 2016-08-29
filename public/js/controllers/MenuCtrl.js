angular.module('find-sampa')
  .controller('MenuCtrl',
      ['$scope','$state','$stateParams','$http'
      , function($scope, $state, $stateParams, $http){


  $scope.mensagemLogin = {
    erro: ''
  };

  $scope.login = 'tiago';
  $scope.senha = 'admin';

  $scope.acessarAdmin = function(form) {

    if(form.login == 'tiago' && form.senha == 'admin'){
      $state.go('dashboard');
    }else {
      $scope.mensagemLogin.erro = 'Login e senha inválidos';
      $timeout(function(){
        $scope.mensagemLogin.erro = '';
      }, 3000);
    }
  };

  $scope.search = function(form) {
    var query = {
      regiao: $stateParams.region,
      query: form.anunciante
    }

    console.log(query)

    $scope.loading = 'loading';

    $http.post('/search', query).then(function(data){
      console.log(data);
    });

    //$http.post('/search', query).then(function(data) {
    //  var response = [
    //    {
    //      [form.anunciante]: data.data
    //    }
    //  ];

    //  $scope.advertisers = response;
    //  $scope.loading = '';
    //}, function(err){
    //  $scope.mensagem = 'Não temos essa categoria cadastra :(';
    //  $timeout(function(){
    //    $scope.mensagem = '';
    //    $scope.loading = '';
    //  }, 3000);
    //});
  };


}]);
