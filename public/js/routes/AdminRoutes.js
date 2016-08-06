angular.module('find-sampa').config(function($stateProvider){

    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'partials/server/dashboard.html'
      })

      .state('newAdvertiser', {
        url: '/dashboard/new',
        templateUrl: 'partials/server/create.html'
      })
//  $routeProvider.when('/dashboard', {
//    templateUrl: 'partials/server/dashboard.html'
//  })

//  .when('/dashboard/create', {
//    templateUrl: 'partials/server/create.html'
//  });

});
