angular.module('starter.controllers')
  .controller('AccountCtrl', AccountCtrl);

function AccountCtrl($scope, $state, $ionicPlatform, $cordovaGoogleAnalytics, vars) {

  //$ionicPlatform.ready(function () {
    $cordovaGoogleAnalytics.trackView('Account Page');
    $cordovaGoogleAnalytics.trackEvent('AccountEvent', 'Video Load Time', 'Gone With the Wind', 100);
  //});

  $scope.changeState = function (state) {
    $state.go(state);
  };

}
