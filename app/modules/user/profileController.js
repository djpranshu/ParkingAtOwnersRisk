'use strict';
 
angular.module('Profile')
 
.controller('ProfileController',
    ['$scope','$rootScope','$log',
    function ($scope , $rootScope , $log) {
    	$scope.message = "Hello user profile...";
      
    }]);