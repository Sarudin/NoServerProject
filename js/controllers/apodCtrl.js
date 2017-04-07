angular.module('whatsOutThereApp').controller('apodCtrl', function($scope, apodService) {
  $scope.apod;
  $scope.date = "";

  $scope.getApod = function() {
      apodService.getApod().then(function(response) {
      $scope.apod = response.data;
    })
  }

  $scope.getApodByDate = function(date) {
    apodService.getApodByDate(date).then(function(response) {
      $scope.apod = response.data;
    })
  }

  $scope.getApod();
})
