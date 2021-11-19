// based on https://www.w3schools.com/angular/angular_intro.asp ...

var app = angular.module('zergApp', []);
app.controller('zergController', function($scope) {
  $scope.givenNames= "John";
  $scope.surNames= "Doe";
});
