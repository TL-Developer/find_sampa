angular.module('find-sampa')
  .controller('AdvertisersController',
    ['$scope','services','$routeParams','$http','$timeout','$location',
    function($scope, services, $routeParams, $http, $timeout, $location){

  $scope.advertisers = [];
  $scope.mensagem = '';
  $scope.categories = [];
  $scope.region = $routeParams.region;

  var listCategories = function(){
    services.categoriesGet().query(function(categories) {
      $scope.categories = categories[0][$routeParams.region];
    });
  };
  listCategories();

  //$scope.selectRegiao = $routeParams.region;
  var teste = [];
  var teste2 = [];
  var getAdvertisers = function(regiao){
    $scope.loading = 'loading';
    services.advertisersGet(regiao).query(function(advertisers){
      $scope.advertisers = advertisers;
      $scope.loading = '';
    });
  };
  getAdvertisers($routeParams.region);

  $scope.selectCategorie = function(categorie) {
    $scope.loading = 'loading';

    if(categorie){
      services.advertisersGet($routeParams.region).query(function(advertisers){
        var advertisersCategorie = [];

        advertisersCategorie.push({[categorie]: advertisers[0][categorie]});

        $scope.advertisers = advertisersCategorie;
        $scope.loading = '';
        console.log(advertisers)
      });
    }else {
      getAdvertisers($routeParams.region);
    }
  };


  $scope.search = function(form) {
    var query = {
      regiao: $routeParams.region,
      query: form.anunciante
    }

    $scope.loading = 'loading';

    $http.post('/search', query).then(function(data) {
      var response = [
        {
          [form.anunciante]: data.data
        }
      ];

      $scope.advertisers = response;
      $scope.loading = '';
    }, function(err){
      $scope.mensagem = 'Não temos essa categoria cadastra :(';
      $timeout(function(){
        $scope.mensagem = '';
        $scope.loading = '';
      }, 3000);
    });
  };


  $scope.mensagemLogin = {
    erro: ''
  };

  $scope.acessarAdmin = function(form) {

    if(form.login == 'tiago' && form.senha == 'admin'){
      $location.path('/dashboard');
    }else {
      $scope.mensagemLogin.erro = 'Login e senha inválidos';
      $timeout(function(){
        $scope.mensagemLogin.erro = '';
      }, 3000);
    }
  }

}]);
