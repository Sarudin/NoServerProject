angular.module('whatsOutThereApp').controller('allExoCtrl', function($scope, allExoService) {
  $scope.allExo;

  $scope.getAllExo = function() {
    allExoService.getAllExo().then(function(response) {
      $scope.allExo = response.data;
    })
  }

  $scope.getAllExo();
})
