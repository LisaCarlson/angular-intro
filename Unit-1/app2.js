var app = angular.module("app",[]);
app.controller("MyController", function ($scope) {
  $scope.number = 5;
  $scope.player1 = 0;
  $scope.player2 = 0;
  $scope.isServing1 = false;
  $scope.isServing2 = false;
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
    if ($scope.click % 2 == 0) {
      $scope.isServing1 = true;
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
    if ($scope.click % 2 == 0) {
      $scope.isServing2 = true;
    }
    else {
      $scope.isServing2 = false;
    }
    if ($scope.player2 == 11) {
      $scope.gameOver = true;
    }
  };
  $scope.reset = function() {
    $scope.player1 = 0;
    $scope.player2 = 0;
    $scope.isServing = false;
    $scope.gameOver = false;
  };
  

})

app.controller("MyController2", function ($scope) {
  $scope.contacts = [{name: 'Harry Potter', email: 'harry@hogwarts.edu', phone: '467-982-7655'},
                      {name: 'Arya Stark', email: 'arya@winterfell.com', phone: '788-973-9373'},
                      {name:'Edward Scissorhands', email: 'ed@victorprice.gov', phone:'857-484-3837'}];
  $scope.newName = '';
  $scope.newEmail = '';
  $scope.newPhone = '';
  $scope.addContact = function(){
    $scope.newContact = {name: $scope.newName, email: $scope.newEmail, phone: $scope.newPhone};
    $scope.contacts.push($scope.newContact);
    console.log('click')
  }

  })





