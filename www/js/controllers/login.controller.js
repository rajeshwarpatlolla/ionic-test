angular.module('starter.controllers')
  .controller('LoginCtrl', LoginCtrl);

function LoginCtrl($scope, $state, $cordovaOauth) {

  $scope.changeState = function (state) {
    $state.go(state);
  };

  $scope.loginWithFacebook = function (state) {
    $cordovaOauth
      .facebook("486208661587668", ["email"])
      .then(function (result) {
        console.log(result);
      }, function (error) {
        console.log(error);
      });
  };

}
