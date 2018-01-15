'use strict';
 
angular.module('Home',['ui.bootstrap'])
 
.controller('HomeController',
    ['$scope','$rootScope','$log','$location',
    function ($scope , $rootScope , $log, $location) {
    	$scope.userName = "Hello Pranshu";
    
       $scope.items = [
    'My Bookings',
    'Profile'
  ];

  $scope.status = {
    isopen: false
  };

 $scope.userOptionSelected = function(select) {
  
  switch (select) {  
                case 'Profile':  
                      $location.path("/profile"); 
                    break;  
                case 'My Bookings':  
                      $location.path("/booking"); 
                    break;  
                case 'Cancel Booking':  
                     $location.path("/cancelbooking"); 
                    break;  
            }  
  
  };
  

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

    }]);