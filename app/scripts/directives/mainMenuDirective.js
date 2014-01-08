'use strict';

var mainModule = angular.module("main");

mainModule.directive('mainMenu', function() {
  return {
    restrict: 'A',
    templateUrl: 'views/mainMenu.html'
  }
});