angular.module('find-sampa')
  .controller('AdvertisersController',
    ['$scope','services',
    function($scope, services){

  $scope.advertisers = [];

  services.advertisersGet.query(function(advertisers){
    $scope.advertisers = advertisers;
  });

}]);
