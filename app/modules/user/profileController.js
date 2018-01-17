'use strict';
 
angular.module('Profile')
 
.controller('ProfileController',
    ['$scope','$rootScope','$log',
    function ($scope , $rootScope , $log) {
    	$scope.profmessage = "Hello user profile...";
      
    }]);