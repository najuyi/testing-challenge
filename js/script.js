'use strict';
var myApp = angular.module('TestApp', []);

myApp.controller('TestCtrl', ['$scope', function ($scope) {

    $scope.passwordMatch = function () {
        $scope.testForm.confirmPassword.$setValidity("match", angular.equals($scope.pw, $scope.cpw));
    };
    
}]);