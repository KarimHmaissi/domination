'use strict';

// function onGoogleReady() {
//   angular.bootstrap(document.getElementById("map"), ['newestangularuimapsApp']);
// }

angular.module('main', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.map',
  'ui.bootstrap'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MapCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
