'use strict';

// Declare app level module which depends on views, and components
var app;
app = angular.module('myApp', ['ngRoute']);
app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

app.controller("FirstCtrl", function ($scope) {
    $scope.result = 0;
    $scope.isResult = true;
    $scope.clickSymbol = function (symbol) {
        if ($scope.isResult){
            $scope.result = symbol;
            $scope.isResult = false;
        } else {
            $scope.result += symbol;
        }
    };
    $scope.clickClear = function(){
        $scope.result = '0';
    };
    $scope.clickResult = function(){
        $scope.result = $scope.$eval($scope.result);
        $scope.isResult = true;
    }
});