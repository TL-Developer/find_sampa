angular.module('find-sampa').factory('services', ['$resource', function($resource){

  var _getAdvetisers = function(regiao){
    return $resource('/api/v1/' + regiao + '/anunciantes');
  }

  var _getAdvetisersId = function(regiao, categorie, id){
    return $resource('/api/v1/' + regiao + '/anunciantes/' + categorie + '/' + id)
  }

  return {
    advertisersGet: _getAdvetisers,
    advertisersGetId: _getAdvetisersId,
    categoriesGet: $resource('/api/v1/categories')
  }

}]);
