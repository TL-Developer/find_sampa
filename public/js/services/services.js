angular.module('find-sampa').factory('services', ['$resource','$routeParams', function($resource){

  return {
    advertisersGet: $resource('/api/v1/anunciantes'),
    advertisersGetId: function(id){
      return $resource('/api/v1/anunciantes/' + id)
    },
    categoriesGet: $resource('/api/v1/categories')
  }

}]);
