  angular.module('find-sampa')
    .controller('AdvertisersController',
      ['$scope','services','$stateParams','$http','$timeout','$state',
      function($scope, services, $stateParams, $http, $timeout, $state){

    $scope.mensagem = '';
    $scope.categories = [];
    $scope.region = $stateParams.region;
    $scope.limitAdvertisers = 6;

    $scope.carregaMais = function(){
      $scope.limitAdvertisers+=3;
    };


    var listCategories = function(){
      services.categoriesGet().query(function(categories) {
        $scope.categories = categories[0][$stateParams.region];
      });
    };
    listCategories();

    $scope.selectRegiao = $stateParams.region;


    var getAdvertisers = function(regiao){

      $scope.advertisers = [];
      var anunciantes = [];

      $scope.loading = 'loading';
      services.advertisersGet(regiao).query(function(advertisers){

        for(var cat in advertisers[0]){
          if(typeof advertisers[0][cat] == 'object'){
            anunciantes.push(advertisers[0][cat]);
          }
        }

        for(var i = 0; i < anunciantes.length; i++){
          for(var j = 0; j < anunciantes[i].length; j++) {
            $scope.advertisers.push(anunciantes[i][j]);
            $scope.loading = '';
          }
        }
      });
    };
    getAdvertisers($stateParams.region);

    $scope.selectCategorie = function(categorie) {
      $scope.loading = 'loading';

      if(categorie){
        services.advertisersGet($stateParams.region).query(function(advertisers){
          $scope.advertisers = advertisers[0][categorie];
          $scope.loading = '';
        });
      }else {
        getAdvertisers($stateParams.region);
      }
    };

  }]);
