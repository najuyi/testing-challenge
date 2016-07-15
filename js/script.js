'use strict';
var myApp = angular.module('TestApp', ['angularMoment']);

myApp.controller('TestCtrl', ['$scope', 'moment', function ($scope, moment) {

    $scope.passwordMatch = function () {
        $scope.testForm.confirmPassword.$setValidity("match", angular.equals($scope.pw, $scope.cpw));
    };
    
    $scope.checkValidity = function(){
        var valid = true;
        var now = moment();
        var input = Date.parse($scope.birthDate);
        //input = moment(input).format('MM/DD/YYYY');
        var dateDiff = moment(now).diff(moment(input), 'y');
        if (dateDiff < 13){
            $scope.testForm.birthDate.$setValidity('old', false);

        }
        else{
            $scope.testForm.birthDate.$setValidity('old', true);
        }
        
    }


}]);