(function () {

  "use strict";

  angular
    .module('test')
    .config(routesConfig);

  function routesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('index', {
        url: '',
        views: {
          layout: {
            templateUrl: 'views/layout.html',
            controller: function ($scope, $state, $stateParams) {
              console.log($scope);
              console.log($state);
              console.log($stateParams);
            }
          }
        }
      })

      .state('index.state1', {
        url: '/state1',
        views: {
          states: {
            templateUrl: 'views/states/state1.html',
            controller: function ($scope, $state, $stateParams) {
              console.log($scope);
              console.log($state);
              console.log($stateParams);
            }
          }
        }
      })

      .state('index.state2', {
        url: '/state2',
        views: {
          states: {
            templateUrl: 'views/states/state2.html',
            controller: function ($scope, $state, $stateParams) {
              console.log($scope);
              console.log($state);
              console.log($stateParams);
            }
          }
        }
      });
  }

});