'use strict';

var mainModule = angular.module("main");

mainModule.directive('event', function() {
  return {
    restrict: 'A',
    templateUrl: 'views/event.html'
  }
});