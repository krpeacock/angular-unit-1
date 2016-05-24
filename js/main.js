var app = angular.module("ReaderApp", []);
app.controller("MainContainer", function($scope){
  $scope.view ={
    title : "Reader App"
  }

})

app.controller("listPosts", function($scope){
  $scope.view = {
    posts: [
      {
        title: "Why I'm so cool",
        author: "Kyle",
        date: "Today at 12:43 PM",
        image: "https://media.giphy.com/media/xThuWg7lusylvpAVu8/giphy.gif",
        description: "(it's because I'm good at programming)",
        comments: ["hi", "coolio", "wowza"],
        rating: 15
      }, 
    ]
  }
  $scope.callNewPost = function(post){
    $scope.view.posts.push({title: "wazzup", author: "Kyle", description: post});
  }
})