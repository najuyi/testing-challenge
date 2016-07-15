'use strict';
var myApp = angular.module('TestApp', ['angularMoment']);

myApp.controller('TestCtrl', ['$scope', 'moment', function ($scope, moment) {

    $scope.passwordMatch = function () {
        $scope.testForm.confirmPassword.$setValidity("match", angular.equals($scope.pw, $scope.cpw));
    };
    
    $scope.checkValidity = function(){
        var date = Date.parse($scope.birthDate);
        
    }


}]);