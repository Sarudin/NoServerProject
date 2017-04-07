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
  });
});
'use strict';

angular.module('whatsOutThereApp').controller('apodCtrl.js', function ($scope, apodService) {});
'use strict';

angular.module('whatsOutThereApp').controller('extCtrl', function ($scope, exoService) {});
'use strict';

angular.module('whatsOutThereApp').controller('homeCtrl', function ($scope, homeService) {});
'use strict';

angular.module('whatsOutThereApp').service('apodService', function ($http) {});
'use strict';

angular.module('whatsOutThereApp').service('exoService', function ($http) {});
'use strict';

angular.module('whatsOutThereApp').service('homeService', function ($http) {});
//# sourceMappingURL=bundle.js.map
