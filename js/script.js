'use strict';
var myApp = angular.module('TestApp', []);

myApp.controller('TestCtrl', ['$scope', function($scope) { 

    $scope.checkValidity = function(){
        var date = Date.parse($scope.birthDate);
        console.log(date);
    }


}]);