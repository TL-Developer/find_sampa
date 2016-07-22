angular.module('find-sampa')
  .controller('HomeController',
    ['$scope','services',
    function($scope, services){

  $scope.advertisers = [];

  $scope.regiao = function(regiao) {

    $scope.loading = 'loading';

    services.advertisersGet(regiao).query(function(advertisers){
      $scope.advertisers = advertisers;
      $scope.loading = '';
    });
  };

  $scope.loading = '';


}]);
