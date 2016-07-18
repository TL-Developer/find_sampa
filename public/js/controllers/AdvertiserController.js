angular.module('find-sampa')
  .controller('AdvertiserController',
      ['$scope','services','$filter','$routeParams',
        function($scope, services, $filter, $routeParams){

  $scope.advertiser = [];

  services.advertisersGetId($routeParams.advertiserId).query(function(advertiser){
    $scope.advertiser = advertiser[0];
  });


  $scope.advertisersRelation = [];
  services.advertisersGet.query(function(advertisers){
    $scope.advertisersRelation = $filter('filter')(advertisers, {category: $scope.advertiser.category});
  });


}]);
