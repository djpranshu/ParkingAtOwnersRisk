'use strict';

// declare modules
angular.module('Authentication', []);
angular.module('Home', []);
angular.module('Main',[]);
angular.module('Register',[]);
angular.module('ForgetPassword',[]);


var app = angular.module('smartManufacturingApp', [
    'Authentication',
    'Home',
    'ngRoute',
    'ngCookies',
    'Main',
    'Register',
    'ForgetPassword',
])
 
app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'modules/authentication/views/login.html',
            hideMenus: true
        })
        .when('/logout', {
            controller: 'LogoutController',
            templateUrl: 'modules/authentication/views/logout.html'
        })

        .when('/main', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/home.html'
        })

         .when('/register', {
            controller: 'RegisterController',
            templateUrl: 'modules/authentication/views/Register.html',
            ideMenus: true
        })

         .when('/forgetpassword', {
            controller: 'ForgetPasswordController',
            templateUrl: 'modules/authentication/views/ForgetPassword.html',
            ideMenus: true
        })
 
        .otherwise({ redirectTo: '/login' });
}]) 
 
app.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
 
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in

            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                
                if($location.path() == '/register' && !$rootScope.globals.currentUser){
                     $location.path('/register');
                }else if($location.path() == '/forgetpassword' && !$rootScope.globals.currentUser){
                    $location.path('/forgetpassword');
                }else{
                     $location.path('/login');
                }
               
            }

            
                
           

 
        });
    }]);



