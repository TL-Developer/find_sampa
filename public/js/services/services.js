angular.module('find-sampa').factory('services', ['$resource', function($resource){

  return {
    'advertisersGet': $resource('/api/v1/advertisers')
  }

}]);
