angular.module('whatsOutThereApp').service('allExoService', function($http) {
  this.getAllExo = function() {
    return $http.get('http://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets').then(function(response) {
      return response;
    })
  }
})
