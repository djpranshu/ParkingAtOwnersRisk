'use strict';
 
angular.module('ForgetPassword')
 
.controller('ForgetPassword',
    ['$scope','$rootScope',
    function ($scope , $rootScope) {
    	$scope.registerMessage = "in home ForgetPassword";
       console.log("In ForgetPassword ..");

    }]);