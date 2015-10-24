angular.module('starter.controllers')
  .controller('HomeCtrl', HomeCtrl);

function HomeCtrl($timeout, $ionicScrollDelegate, ScrollService) {

  try {
    $timeout(function () {
      var sv = $ionicScrollDelegate.$getByHandle('quantity_scroll_delegate').getScrollView();
      ScrollService.handleScroll(sv);
    });
    $timeout(function () {
      var sv = $ionicScrollDelegate.$getByHandle('color_scroll_delegate').getScrollView();
      ScrollService.handleScroll(sv);
    });
    $timeout(function () {
      var sv = $ionicScrollDelegate.$getByHandle('share_scroll_delegate').getScrollView();
      ScrollService.handleScroll(sv);
    });
  } catch (e) {
    console.log('Error in scrolling : HomeCtrl')
  }

}
