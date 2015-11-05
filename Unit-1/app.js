var app = angular.module("firstApp", []);
app.controller("MyFirstController", function ($scope) {
  $scope.name = "Severus Snape";
})
app.controller("ExercisesController", function ($scope) {
  $scope.FavColor = 'Green';
  $scope.secondsInACentury = 60*60*24*7*52*100;
  $scope.rightNow = new Date();
})