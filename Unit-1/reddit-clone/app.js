var app = angular.module("app", []);

app.controller("MyController", ['$scope', function ($scope) {
  $scope.showForm = false;
  $scope.posts = [{title:'Outside Aspen, CO', body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed qu', author: 'Ned Stark', time: 'Sep 3, 2010 12:05:08 PM', image:'https://images.unsplash.com/photo-1440470177828-6381dc5074ba?ixlib=rb-0.3.5&q=80&fm=jpg&s=6faf705d60f9804d03079755fb323a9a', comments: ['Wow, so cool!', 'Neato!']}];
  $scope.submitPost = function() {
    $scope.showForm = ($scope.showForm === true) ? false : true;  
  }

}])
