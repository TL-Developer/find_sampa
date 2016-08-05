angular.module('find-sampa')
  .controller('AdvertiserController',
      ['$scope','services','$filter','$stateParams',
        function($scope, services, $filter, $stateParams){

  $scope.advertiser = [];

  $scope.routeParams = $stateParams;

  $scope.categories = [];
  $scope.region = $stateParams.region;
  $scope.categorie = $stateParams.categorie;

  var listCategories = function(){
    services.categoriesGet().query(function(categories) {
      $scope.categories = categories;
    });
  };
  listCategories();

  $scope.loading2 = 'show';
  services.advertisersGetId($stateParams.region, $stateParams.categorie, $stateParams.id).query(function(advertiser){
    $scope.advertiser = advertiser[0];
    $scope.loading2 = '';
  });


  $scope.showModalPopupImagem = function(path,img) {
    var imagem = 'img/advertisers/'+path+'/'+img;
    $scope.conteudoShowModal = imagem;
  };

  $scope.advertisersRelation = [];
  services.advertisersGet($stateParams.region).query(function(advertisers){
    $scope.advertisersRelation = advertisers[0][$stateParams.categorie];
    $scope.loading = 'ok';
  });

}]);
