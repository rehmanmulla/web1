var app = angular.module("MyApp" , ['ngRoute']);

    app.config(['$routeProvider', '$locationProvider', function( $routeProvider, $locationProvider){
        $routeProvider.
        when('/home', {
            templateUrl:"views/home.html",
            controller: ""
        }).otherwise({
            redirectTo:"/home",
        });
    
    
    
    
    }])


    