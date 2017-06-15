'use strict';

angular.module('app')
  .controller('mCtrl', function ($http,$rootScope,$scope,$stateParams,$state,s1) {
    $scope.name = s1.name;
  });
