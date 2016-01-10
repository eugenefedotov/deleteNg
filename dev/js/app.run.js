(function () {
  "use strict";

  angular
    .module('test')
    .run(runApp);

  function runApp($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }
});