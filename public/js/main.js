angular.module('find-sampa', ['ngRoute','ngResource'])
  .config(function($routeProvider){

    $routeProvider.when('/anunciantes', {
      templateUrl: 'partials/client/advertisers.html',
      controller: 'AdvertisersController'
    })

    .when('/anunciantes/:advertiserId', {
      templateUrl: 'partials/client/advertiser.html',
      controller: 'AdvertiserController'
    })

    .when('/login', {
      templateUrl: 'partials/server/login.html'
    })

    .when('/create', {
      templateUrl: 'partials/server/create.html',
      controller: 'CreateController'
    })

    .otherwise({redirectTo: '/anunciantes'});

  });
