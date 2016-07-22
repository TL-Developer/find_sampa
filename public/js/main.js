angular.module('find-sampa', ['ngRoute','ngResource'])
  .config(function($routeProvider){

    $routeProvider.when('/home', {
      templateUrl: 'partials/client/home.html',
      controller: 'HomeController'
    })

    $routeProvider.when('/:region/anunciantes', {
      templateUrl: 'partials/client/advertisers.html',
      controller: 'AdvertisersController'
    })

    .when('/:region/anunciantes/:categorie/:advertiserId', {
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

    .otherwise({redirectTo: '/home'});

  });
