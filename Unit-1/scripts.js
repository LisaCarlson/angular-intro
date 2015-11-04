angular.module('app', []).
controller('MainController', ['$scope', function ($scope) {
    $scope.show = false;
    $scope.generate = function () {
       $scope.show = true;         
    };
}]);
