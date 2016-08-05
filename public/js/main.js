angular.module('find-sampa', ['ui.router','ngResource'])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider){

    //$locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/client/home.html'
      })

      .state('anunciantes', {
        url: '/:region/anunciantes',
        templateUrl: 'partials/client/advertisers.html',
        controller: 'AdvertisersController'
      })

      .state('viewAdvertiser', {
        url: '/:region/anunciantes/:categorie/:id',
        templateUrl: 'partials/client/advertiser.html',
        controller: 'AdvertiserController'
      });


    $urlRouterProvider.otherwise('/');



//    $routeProvider.when('/home', {
//      templateUrl: 'partials/client/home.html'
//    })

//    $routeProvider.when('/:region/anunciantes', {
//      templateUrl: 'partials/client/advertisers.html',
//      controller: 'AdvertisersController'
//    })

//    .when('/:region/anunciantes/:categorie/:advertiserId', {
//      templateUrl: 'partials/client/advertiser.html',
//      controller: 'AdvertiserController'
//    })

//  .when('/login', {
//      templateUrl: 'partials/server/login.html'
//    })

//    .when('/create', {
//      templateUrl: 'partials/server/create.html',
//      controller: 'CreateController'
//    })

//    .otherwise({redirectTo: '/home'});

  });
