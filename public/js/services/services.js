angular.module('find-sampa').factory('services', ['$resource', function($resource){

  var _getAdvetisers = function(regiao){
    return $resource('/api/v1/' + regiao + '/anunciantes');
  }

  var _getAdvetisersId = function(regiao, categorie, id){
    return $resource('/api/v1/' + regiao + '/anunciantes/' + categorie + '/' + id);
  }

  var _getAdvetisersFull = function(){
    return $resource('/api/v1/anunciantes');
  };

  var _getCategories = function(){
    return $resource('/api/v1/categories');
  }

  return {
    advertisersGetFull: _getAdvetisersFull,
    advertisersGet: _getAdvetisers,
    advertisersGetId: _getAdvetisersId,
    categoriesGet: _getCategories
  }

}]);
