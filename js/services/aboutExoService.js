angular.module('whatsOutThereApp').service('aboutExoService', function($http) {
  this.getExoInfo = function(nameAndLetter) {
    console.log("nameAndLetter = " + nameAndLetter);
    return $http.get("http://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&where=pl_hostname like '" + nameAndLetter.substring(0, nameAndLetter.length - 1) + "' and pl_letter like '" + nameAndLetter.substring(nameAndLetter.length - 1, nameAndLetter.length) + "'&format=json").then(function(response) {
      return response.data;
    })
  }
})
