angular.module('find-sampa', ['ngRoute','ngResource'])
  .config(function($routeProvider){

    $routeProvider.when('/advertisers', {
      templateUrl: 'partials/client/advertisers.html',
      controller: 'AdvertisersController'
    })

    .otherwise({redirectTo: '/advertisers'});

  });
