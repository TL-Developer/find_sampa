angular.module('find-sampa')
  .controller('AdvertiserController',
      ['$scope','services','$filter','$routeParams',
        function($scope, services, $filter, $routeParams){

  $scope.advertiser = [];

  $scope.routeParams = $routeParams;

  services.advertisersGetId($routeParams.region, $routeParams.categorie, $routeParams.advertiserId).query(function(advertiser){
    $scope.advertiser = advertiser[0];
  });

}]);
