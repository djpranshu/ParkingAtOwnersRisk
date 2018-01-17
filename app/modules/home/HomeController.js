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

   $scope.templates = [{
        name: 'View Profile',
        url: 'modules/home/views/userprofile.html'},
    {
        name: 'My Bookings',
        url: 'modules/home/views/mybookings.html'}];
    

    $scope.views = [{
        name: 'View Parkings',
        url: 'modules/home/views/parkings.html'},
    {
        name: 'Book Parking',
        url: 'modules/home/views/mybookings.html'},
    {   
        name: 'Offers',
        url: 'modules/home/views/offers.html'}];






$scope.loadPartial = function(link) {
    $scope.currentPartial =  link;
   
  
}
$scope.setinvisible = function(link) {
    $scope.currentPartial =  link;
  
}

$scope.goHome = function(path) {  
    $scope.loadPartial(path);  
}

  $scope.status = {
    isopen: false
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