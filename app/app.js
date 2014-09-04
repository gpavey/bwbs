var app = angular.module('bwbsApp',[
  'ngRoute',
  'duParallax',
  'ui.utils'

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
      when('/rides',{
        templateUrl: "partials/rides.html",
      }).
      when('/location',{
        templateUrl: "partials/find.html",
      }).
      otherwise({
        redirectTo: '/'
      })
  }]);

app.controller('plxCtrl', function($scope, parallaxHelper){
    $scope.background = parallaxHelper.createAnimator(-0.6, 250, -150);
  }
);

app.controller('formCtrl', function($scope) {
  $scope.name = 'World';
   $scope.selection = 2;
    $scope.items = ['div 1', 'div 2', 'div 3'];
    $scope.forward = function() {
      if ($scope.selection==$scope.items.length-1) $scope.selection=0;
      else $scope.selection++;
      };
    $scope.back = function() {
      if ($scope.selection==0) $scope.selection = $scope.items.length-1;
      else $scope.selection --;
      };
    $scope.test = function(stuff) {

      alert(stuff);
    }
    $scope.doSomething = function(j) {
      console.log(j);  // this would log the array item, in this case it is a simple string.

    }

});