'use strict';

angular.module('whatsOutThereApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: './views/home.html',
    controller: 'homeCtrl'
  }).state('apod', {
    url: '/apod',
    templateUrl: './views/apod.html',
    controller: 'apodCtrl'
  }).state('exo', {
    url: '/exo',
    templateUrl: './views/exo.html',
    controller: 'exoCtrl'
  }).state('allExo', {
    url: '/allExo',
    templateUrl: './views/allExo.html',
    controller: 'allExoCtrl'
  });

  $urlRouterProvider.otherwise('/');
});
'use strict';

angular.module('whatsOutThereApp').controller('allExoCtrl', function ($scope, allExoService) {
  $scope.allExo;

  $scope.getAllExo = function () {
    allExoService.getAllExo().then(function (response) {
      $scope.allExo = response.data;
    });
  };

  $scope.getAllExo();
});
'use strict';

angular.module('whatsOutThereApp').controller('apodCtrl', function ($scope, apodService) {
  $scope.apod;
  $scope.date = "";

  $scope.getApod = function () {
    apodService.getApod().then(function (response) {
      $scope.apod = response.data;
    });
  };

  $scope.getApodByDate = function (date) {
    apodService.getApodByDate(date).then(function (response) {
      $scope.apod = response.data;
    });
  };

  $scope.getApod();
});
'use strict';

angular.module('whatsOutThereApp').controller('exoCtrl', function ($scope, exoService) {});
'use strict';

angular.module('whatsOutThereApp').controller('homeCtrl', function ($scope, homeService) {});
'use strict';

angular.module('whatsOutThereApp').service('allExoService', function ($http) {
  this.getAllExo = function () {
    return $http.get('http://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets').then(function (response) {
      return response;
    });
  };
});
'use strict';

angular.module('whatsOutThereApp').service('apodService', function ($http) {
  this.getApod = function () {
    return $http.get('https://api.nasa.gov/planetary/apod?api_key=9Z9LkSbzAuUy2OgvFr80Vrlm2kbiMq8a9RaAkYA9').then(function (response) {
      return response;
    });
  };

  this.getApodByDate = function (date) {
    console.log(date);
    var correctYear = date.toString().substring(11, 15);
    var correctMonth = this.getCorrectMonth(date.toString().substring(4, 7));
    var correctDay = date.toString().substring(8, 10);
    var correctDate = correctYear + '-' + correctMonth + '-' + correctDay;
    console.log(correctDate);
    return $http.get('https://api.nasa.gov/planetary/apod?api_key=9Z9LkSbzAuUy2OgvFr80Vrlm2kbiMq8a9RaAkYA9&date=' + correctDate).then(function (response) {
      return response;
    });
  };

  this.getCorrectMonth = function (d) {
    switch (d) {
      case 'Jan':
        return '01';
      case 'Feb':
        return '02';
      case 'Mar':
        return '03';
      case 'Apr':
        return '04';
      case 'May':
        return '05';
      case 'Jun':
        return '06';
      case 'Jul':
        return '07';
      case 'Aug':
        return '08';
      case 'Sep':
        return '09';
      case 'Oct':
        return '10';
      case 'Nov':
        return '11';
      case 'Dec':
        return '12';
    }
  };
});
'use strict';

angular.module('whatsOutThereApp').service('exoService', function ($http) {});
'use strict';

angular.module('whatsOutThereApp').service('homeService', function ($http) {});
//# sourceMappingURL=bundle.js.map
