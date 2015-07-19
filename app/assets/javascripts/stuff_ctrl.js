(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {
    
    $scope.message = "Hello world!";

    $scope.reviews = ["It's awesome!", "Use React instead!", "Best thing since sliced bread!"];

    $scope.addReview = function(review) {
      $scope.reviews.push(review);
    };

    $scope.isPositive = function(review) {
      return review.indexOf("bad") === -1;
    }

    window.scope = $scope;
  });

}());