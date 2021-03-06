'use strict';
 
angular.module('Authentication')
 
.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService','$timeout',
    function ($scope, $rootScope, $location, AuthenticationService,$timeout) {
        // reset login status
        AuthenticationService.ClearCredentials();
        
         
        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function(response) {
                if(response.success) {
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    $location.path('/main');
                   
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };

        $scope.register = function(){

            AuthenticationService.RegisterUser($scope.firstname , $scope.lastname , $scope.email , $scope.password ,function(response) {
                $scope.success = "successfully Registered!!";
            });

            $timeout(function(){
              $scope.success = false;
              window.location.reload();
            }, 5000);

           console.log("user registered",$scope.firstname);
        };
    }]);