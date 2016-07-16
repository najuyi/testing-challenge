'use strict';
var myApp = angular.module('TestApp', ['angularMoment']);

myApp.controller('TestCtrl', ['$scope', 'moment', function ($scope, moment) {

    $scope.passwordMatch = function () {
        $scope.testForm.confirmPassword.$setValidity("match", angular.equals($scope.pw, $scope.cpw));
    };
    
    $scope.checkBday = function(){
        var valid = true;
        var now = moment();
        var format = moment($scope.birthDate).isValid();
        var input = Date.parse($scope.birthDate);
        var dateDiff = moment(now).diff(moment(input), 'y');
        if (dateDiff < 13){
            $scope.testForm.birthDate.$setValidity('old', false);
          
        }
        else{
            $scope.testForm.birthDate.$setValidity('old', true);
          
        }
        if (format == false){
            $scope.testForm.birthDate.$setValidity('valid', false);
           

        }
        else{
            $scope.testForm.birthDate.$setValidity('valid', true);
        
        }
        
    }

    //show the message when the button is clicked
    $scope.message = "";
    $scope.isValid = false;
    $scope.checkValidity = function(){
        $scope.isValid = true;
        //when everything is valid
    }
    



}]);