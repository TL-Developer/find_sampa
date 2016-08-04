angular.module('find-sampa').config(function($routeProvider){

  $routeProvider.when('/dashboard', {
    templateUrl: 'partials/server/dashboard.html'
  })

  .when('/dashboard/create', {
    templateUrl: 'partials/server/create.html'
  });

});
