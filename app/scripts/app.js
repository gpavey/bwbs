'use strict';

/**
 * @ngdoc overview
 * @name bikeworksApp
 * @description
 * # bikeworksApp
 *
 * Main module of the application.
 */

var app = angular.module('bikeworksApp',[
  'ngRoute',
  'duParallax',
  'ui.utils'

  ]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/',{
        templateUrl: 'views/home.html',
      }).
      when('/service',{
        templateUrl: 'views/service.html',
      }).
      when('/rental',{
        templateUrl: 'views/rental.html',
      }).
      when('/rides',{
        templateUrl: 'views/rides.html',
      }).
      when('/location',{
        templateUrl: 'views/find.html',
      }).
      when('receive_store',{
        templateUrl: 'views/services/receive_store.html',
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

app.controller('plxCtrl', function($scope, parallaxHelper){
    $scope.background = parallaxHelper.createAnimator(-0.6, 250, -150);
    $scope.aField='true';
  }
);


