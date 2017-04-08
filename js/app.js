angular.module('whatsOutThereApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home.html',
      controller: 'homeCtrl'
    })
    .state('apod', {
      url: '/apod',
      templateUrl: './views/apod.html',
      controller: 'apodCtrl'
    })
    .state('exo', {
      url: '/exo',
      templateUrl: './views/exo.html',
      controller: 'exoCtrl'
    })
    .state('allExo', {
      url: '/allExo',
      templateUrl: './views/allExo.html',
      controller: 'allExoCtrl'
    })
    .state('aboutExo', {
      url: '/aboutExo/:nameAndLetter',
      templateUrl: './views/aboutExo.html',
      controller: 'aboutExoCtrl'
    })

    $urlRouterProvider.otherwise('/');
})
