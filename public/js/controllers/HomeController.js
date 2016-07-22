angular.module('find-sampa')
  .controller('HomeController',
    ['$scope','services',
    function($scope, services){

  $scope.advertisers = [];
  $scope.categories = [];

  var listCategories = function(){
    services.categoriesGet().query(function(categories) {
      $scope.categories = categories;
    });
  };
  listCategories();

  var listAdvertisersFull = function(){
    services.advertisersGetFull().query(function(advertisers){
      $scope.advertisers = advertisers;
      $scope.loading = '';
    });
  };
  listAdvertisersFull();

  var listAdvertisers = function(regiao){
    services.advertisersGet(regiao).query(function(advertisers){
      $scope.advertisers = advertisers;
      $scope.loading = '';
    });
  };

  $scope.regiao = function(regiao) {

    $scope.loading = 'loading';

    listAdvertisers(regiao);
  };

  $scope.loading = '';


}]);
