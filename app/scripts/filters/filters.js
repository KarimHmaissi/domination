'use strict';

var mainModule = angular.module("main");

mainModule.filter('legal', function() {
  return function(input) {
    return input ? "LEGAL" : "ILLEGAL";
  };
});