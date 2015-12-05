(function () {
  angular.module('starter.controllers')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl($scope, $timeout, $ionicScrollDelegate, ScrollService) {

    $timeout(function(){
      var sv = $ionicScrollDelegate.$getByHandle('horizontal').getScrollView();
      ScrollService.handleScroll(sv);
      var sv2 = $ionicScrollDelegate.$getByHandle('horizontal2').getScrollView();
      ScrollService.handleScroll(sv2);
    });

  }

})();
