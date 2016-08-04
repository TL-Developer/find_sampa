angular.module('find-sampa')
  .controller('AdvertiserController',
      ['$scope','services','$filter','$routeParams',
        function($scope, services, $filter, $routeParams){

  $scope.advertiser = [];

  $scope.routeParams = $routeParams;

  $scope.categories = [];
  $scope.region = $routeParams.region;
  $scope.categorie = $routeParams.categorie;

  var listCategories = function(){
    services.categoriesGet().query(function(categories) {
      $scope.categories = categories;
    });
  };
  listCategories();


  $scope.loading2 = 'show';
  services.advertisersGetId($routeParams.region, $routeParams.categorie, $routeParams.advertiserId).query(function(advertiser){
    $scope.advertiser = advertiser[0];
    $scope.loading2 = '';
  });


  $scope.showModalPopupImagem = function(path,img) {
    var imagem = 'img/advertisers/'+path+'/'+img;
    $scope.conteudoShowModal = imagem;
  };

  $scope.advertisersRelation = [];
  services.advertisersGet($routeParams.region).query(function(advertisers){
    $scope.advertisersRelation = advertisers[0][$routeParams.categorie];
    $scope.loading = 'ok';
  });

}]);
