angular.module('find-sampa')
  .controller('CreateController',
      ['$scope','services',
        function($scope, services){

  $scope.categories = [];

  services.categoriesGet.query(function(categories){
    $scope.categories = categories;
  });


}]);
