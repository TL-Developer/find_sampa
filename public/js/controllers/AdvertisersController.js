  angular.module('find-sampa')
    .controller('AdvertisersController',
      ['$scope','services','$stateParams','$http','$timeout','$state',
      function($scope, services, $stateParams, $http, $timeout, $state){


    $scope.advertisers = [];
    $scope.mensagem = '';
    $scope.categories = [];
    $scope.region = $stateParams.region;

    var listCategories = function(){
      services.categoriesGet().query(function(categories) {
        $scope.categories = categories[0][$stateParams.region];
      });
    };
    listCategories();

    $scope.selectRegiao = $stateParams.region;

    var teste = [];

    var getAdvertisers = function(regiao){
      $scope.loading = 'loading';
      services.advertisersGet(regiao).query(function(advertisers){

        for(var cat in advertisers[0]){
          if(typeof advertisers[0][cat] == 'object'){
            teste.push(advertisers[0][cat]);
          }
        }

        for(var i = 0; i < teste.length; i++){
          for(var j = 0; j < teste[i].length; j++) {
            $scope.advertisers.push(teste[i][j]);
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


    $scope.search = function(form) {
      var query = {
        regiao: $stateParams.region,
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

  }]);
