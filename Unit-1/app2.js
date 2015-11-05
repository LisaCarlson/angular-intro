var app = angular.module("app",[]);
app.controller("MyController", function ($scope) {
  $scope.number = 5;
  $scope.player1 = 0;
  $scope.player2 = 0;
  $scope.isServing1 = false;
  $scope.isServing2 = false;
  $scope.turn1 = true;
  $scope.turn2 = false;
  $scope.click = 0;
  $scope.gameOver = false;
  $scope.pickRandomNumber = function(){
    $scope.number = Math.floor(Math.random() * 10) + 1;
  }
  $scope.reverseWord = function(){
    $scope.word = $scope.word.split('').reverse().join('');
  }
  $scope.playPlayer1 = function(){
    $scope.player1++;
    $scope.click++;
    if ($scope.click % 2 == 0 && $scope.turn1 == true) {
      $scope.isServing1 = true;
      $scope.turn1 = false;
      $scope.turn2 = true;
    }
    
    else {
      $scope.isServing1 = false;
    }
    if ($scope.player1 == 11) {
      $scope.gameOver = true;

    }
  }
  $scope.playPlayer2 = function(){
    $scope.player2++;
    $scope.click++;
    if ($scope.click % 2 == 0 && $scope.turn2 == true) {
      $scope.isServing2 = true;
      $scope.turn2 = false;
      $scope.turn1 = true;
    }
    else {
      $scope.isServing2 = false;
    }
    if ($scope.player2 == 11) {
      $scope.gameOver = true;
    }
  }
  $scope.reset = function() {
    $scope.player1 = 0;
    $scope.player2 = 0;
    $scope.isServing = false;
    $scope.gameOver = false;
  }
})