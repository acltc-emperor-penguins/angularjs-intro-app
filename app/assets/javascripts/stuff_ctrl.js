(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {
    
    $scope.message = "Hello world!";

    $scope.reviews = [
      {
        text: "Angular is awesome!",
        rating: 5,
        reviewer: "Polly Jones"
      },
      { 
        text: "I love AngularJS, especially when I'm programming!",
        rating: 4,
        reviewer: "Emily Post"
      },
      { 
        text: "AngularJS is waaaaay better than Chinese Checkers.",
        rating: 2,
        reviewer: "Angela Pearson"
      }
    ];

    $scope.addReview = function(reviewText) {
      var newReview = {
        text: reviewText
      }

      $scope.reviews.push(newReview);
    };

    $scope.isPositive = function(review) {
      return review.indexOf("bad") === -1;
    }

    window.scope = $scope;
  });

}());