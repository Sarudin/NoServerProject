angular.module('whatsOutThereApp').directive('allExoFunctionalDir', function() {
  return {
    restrict: 'E',
    templateUrl: './views/allExoTmpl.html',
    controller: function($scope, allExoService) {
      $scope.allExo;

      $scope.getAllExo = function() {
        allExoService.getAllExo().then(function(response) {
          $scope.allExo = response;
        })
      }

      $scope.getAllExo();
    }
    }
})
