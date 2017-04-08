angular.module('whatsOutThereApp').controller('aboutExoCtrl', function($scope, aboutExoService, $stateParams) {
  $scope.exoInfo;

  $scope.getExoInfo = function() {
    aboutExoService.getExoInfo($stateParams.nameAndLetter).then(function(response) {
      $scope.exoInfo = response;
    })
  }

  $scope.getExoInfo();
})
