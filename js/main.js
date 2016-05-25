var app = angular.module("ReaderApp", []);
app.controller("MainContainer", function($scope){
  $scope.view ={
    title : "Reader App"
  },
  $scope.user = { name: "Kyle" }

})

app.controller("listPosts", function($scope){
  $scope.showDate = function(date){
    return moment(date)
  }

  $scope.view = {
    posts: [
      {
        title: "Why I'm so cool",
        author: "Kyle",
        date: "2016-05-22T22:12:16.552Z",
        fromNow: function(){
          return moment(this.date).fromNow();
        },
        image: "https://media.giphy.com/media/xThuWg7lusylvpAVu8/giphy.gif",
        description: "(it's because I'm good at programming)",
        comments: [{text:"hi"}, {text:"coolio"}, {text:"wowza"}],
        upvoters: [],
        isUpvoted: function(){ return this.upvoters.indexOf($scope.user) > -1},
        downvoters: [],
        isDownvoted: function(){ return this.downvoters.indexOf($scope.user) > -1},
        getRating: function(){ return this.upvoters.length - this.downvoters.length}
      },
    ]
  };
  $scope.hideForm = true;
  $scope.showComments = false;
  $scope.commentForm = false;
  $scope.newComment;

  $scope.commentsToggle = function(){
    if ($scope.showComments) $scope.showComments = false;
    else $scope.showComments = true;
  }
  $scope.commentFormToggle = function(){
    if ($scope.commentForm) $scope.commentForm = false;
    else $scope.commentForm = true;
  }

  $scope.formToggle = function(){
    if ($scope.hideForm) $scope.hideForm = false;
    else $scope.hideForm = true;
  }
  $scope.callUpvote = function(){
    if (this.post.upvoters.indexOf(this.user) < 0){
      this.post.upvoters.push(this.user);
    }
    if (this.post.downvoters.indexOf(this.user) > -1){
      this.post.downvoters.splice(this.post.downvoters.indexOf(this.user), 1);
    }
  }

  $scope.callDownvote = function(){
    if (this.post.downvoters.indexOf(this.user) < 0){
      this.post.downvoters.push(this.user);
    }
    if (this.post.upvoters.indexOf(this.user) > -1){
      this.post.upvoters.splice(this.post.upvoters.indexOf(this.user), 1);
    }
  }

  $scope.callNewPost = function(){
    
    if ($scope.newTitle && $scope.newAuthor && $scope.newImage && $scope.newDescription){
      var post = {};
      post.title = $scope.newTitle;
      post.author = $scope.newAuthor;
      post.date = moment().calendar();
      post.image = $scope.newImage;
      post.description = $scope.newDescription;
      post.comments = [];
      post.rating = 0;

      $scope.view.posts.push(post);
      $scope.formToggle();
    }
  }
  $scope.callNewComment = function(){
    var newComment = {};
    newComment.text = this.newComment;
    this.post.comments.push(newComment);
    $scope.commentForm = false;
  } 
})