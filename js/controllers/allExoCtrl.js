angular.module('whatsOutThereApp').controller('allExoCtrl', function($scope, allExoService) {
  $scope.allExo;

  $scope.getAllExo = function() {
    allExoService.getAllExo().then(function(response) {
      $scope.allExo = response;
      console.log(response);
    })
  }

  $scope.getAllExo();

  $scope.showLocation = function(idx) {
    window.open('http://server3.sky-map.org/v2?zoom=1&show_grid=1&show_constellation_lines=1&show_constellation_boundaries=1&show_const_names=0&show_galaxies=1&show_box=1&box_ra=19.883874999999996&box_de=47.60494444444444&box_width=50&box_height=50&img_source=DSS2&ra=' + idx.ra_str + '&de=' + idx.dec_str);
  }
})
