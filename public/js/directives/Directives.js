angular.module('find-sampa').directive('modalPopupImagem', [function(){

  return {
    transclude: true,
    restrict: 'AE',
    templateUrl: 'partials/client/includes/modal-popup.html'
  };

}]);
