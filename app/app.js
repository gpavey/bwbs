var app = angular.module('bwbsApp',[
  'ngRoute',
  'duParallax'
  ]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/',{
        templateUrl: "partials/home.html",
      }).
      when('/service',{
        templateUrl: "partials/service.html",
      }).
      when('/rental',{
        templateUrl: "partials/rental.html",
      }).
      when('/service',{
        templateUrl: "partials/rides.html",
      }).
      otherwise({
        redirectTo: '/'
      })
  }]);

app.controller('myCtrl', function($scope, parallaxHelper){
    $scope.background = parallaxHelper.createAnimator(-0.6, 250, -150);
  }
);