'use strict';
 
angular.module('Main')
 
.controller('MainController',
    ['$scope','$rootScope',
    function ($scope , $rootScope) {

       $scope.message = "in Main Controller";
        $rootScope.hideFooter = true ;
         $rootScope.hideIconBar = true;
         $rootScope.hideNavBar = true;
         console.log("this is main contrller");
    }]);