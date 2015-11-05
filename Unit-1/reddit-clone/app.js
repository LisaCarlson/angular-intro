var app = angular.module("app", []);

app.controller("MyController", ['$scope', function ($scope) {
  $scope.showForm = false;
  $scope.posts = [{id: 1, title:'Outside Aspen, CO', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed qu', author: 'Ned Stark', time: 'Sep 3, 2010 12:05:08 PM', image:'https://images.unsplash.com/photo-1440470177828-6381dc5074ba?ixlib=rb-0.3.5&q=80&fm=jpg&s=6faf705d60f9804d03079755fb323a9a', comments: ['Wow, so cool!', 'Neato!'], votes: 0},
                  {id: 2, title:'San Francisco, CA', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa tae vitae dicta sunt explicabo. Nemo enim', author: 'Cersei Lannister', time: 'Oct 19, 2012 1:05:08 AM', image:'https://images.unsplash.com/photo-1439508472515-4899b144f04d?ixlib=rb-0.3.5&q=80&fm=jpg&s=cf1bbf2bb506b514656f91c759c108ee', comments: ['Awesome'], votes: 0},
                  {id: 3, title:'Anchorage, AK', description: 'harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut', author: 'Tyrion Lannister', time: 'Nov 7, 2014 4:44:27 PM', image:'https://images.unsplash.com/photo-1432057322224-8916b9ed202a?ixlib=rb-0.3.5&q=80&fm=jpg&s=295e6155b49be516a7c49d745995ca10', comments: ['Great pic','Amazing','Swell'], votes: 0}];
  $scope.submitPost = function() {
    $scope.showForm = ($scope.showForm === true) ? false : true;  
  }
  $scope.addPost = function(){
    $scope.newPost = {id: $scope.posts.length + 1, title: $scope.title, description: $scope.description, author: $scope.author, time: new Date(), comments:[], image: $scope.image};
    $scope.posts.push($scope.newPost);
    $scope.showForm = false;
  }
  $scope.upVote = function() {
    
  }
}])
