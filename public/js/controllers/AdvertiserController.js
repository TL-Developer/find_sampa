angular.module('find-sampa')
  .controller('AdvertiserController',
      ['$scope','services','$filter','$routeParams',
        function($scope, services, $filter, $routeParams){

  $scope.advertiser = [];

  $scope.routeParams = $routeParams;

  $scope.categories = [];

  var listCategories = function(){
    services.categoriesGet().query(function(categories) {
      $scope.categories = categories;
    });
  };
  listCategories();

  services.advertisersGetId($routeParams.region, $routeParams.categorie, $routeParams.advertiserId).query(function(advertiser){
    $scope.advertiser = advertiser[0];
  });


  $scope.showModalPopupImagem = function(path,img) {

    var imagem = 'img/advertisers/'+path+'/'+img;

    $scope.conteudoShowModal = imagem;

  };

}]);
