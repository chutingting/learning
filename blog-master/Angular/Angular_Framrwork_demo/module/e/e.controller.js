'use strict';

angular.module('app')
  .controller('eCtrl', function ($http,$rootScope,$scope,$stateParams,$state,s2) {
    $scope.name = s2.name;
  });
