//created module sidebarApp
var app =angular.module('sidebarApp', [
  'ng-route'
]);


// angular routing
//configure route
app.config(function($routeProvider){
    $routeProvider

    // home, contact, and about view pages.
    .when('/', {
          templateUrl: 'public/views/home.html'
          controller:'mainController'
    })
    .when('/about', {
          templateUrl:'public/views/about.html'
          controller:'aboutController'
    })
    .when('/contact', {
          templateUrl:'public/views/contact.html'
          controller: 'contactController'
    })

})

// angular controllers for views

//main view controller
app.controller('mainController',function($scope){

    // a message that displays the view
    $scope.message = "Everyone favorite event finder around there town."

});
//about view controller
app.controller('aboutController',function($scope){

    //shows in the about.html page
       $scope.message = 'Look! I am an about page.';
});
//contact view controller
app.controller('contactController', function($scope){
    //shows in the contact.html page
    $scope.message = 'Contact us! JK. This is just a demo.';
});
