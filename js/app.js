angular.module('whatsOutThereApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home.html'
    })
    .state('apod', {
      url: '/apod',
      templateUrl: './views/apod.html'
    })
    .state('exo', {
      url: '/exo',
      templateUrl: './views/exo.html'
    })
    .state('allExo', {
      url: '/allExo',
      templateUrl: './views/allExo.html'
    })
    .state('aboutExo', {
      url: '/aboutExo/:nameAndLetter',
      templateUrl: './views/aboutExo.html'
    })

    $urlRouterProvider.otherwise('/');
})
