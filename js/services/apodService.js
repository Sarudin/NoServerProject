angular.module('whatsOutThereApp').service('apodService', function($http) {
  this.getApod = function() {
    return $http.get('https://api.nasa.gov/planetary/apod?api_key=9Z9LkSbzAuUy2OgvFr80Vrlm2kbiMq8a9RaAkYA9').then(function(response) {
      return response;
    })
  }

  this.getApodByDate = function(date) {
    console.log(date);
    var correctYear = date.toString().substring(11, 15);
    var correctMonth = this.getCorrectMonth(date.toString().substring(4, 7));
    var correctDay = date.toString().substring(8, 10);
    var correctDate = correctYear + '-' + correctMonth + '-' + correctDay;
    console.log(correctDate);
    return $http.get('https://api.nasa.gov/planetary/apod?api_key=9Z9LkSbzAuUy2OgvFr80Vrlm2kbiMq8a9RaAkYA9&date=' + correctDate).then(function(response) {
      return response;
    })
  }

  this.getCorrectMonth = function(d) {
    switch(d) {
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
  }
})
