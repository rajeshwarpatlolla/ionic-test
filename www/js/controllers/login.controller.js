angular.module('starter.controllers', [])
  .controller('LoginCtrl', LoginCtrl);

function LoginCtrl($scope, $state) {

  $scope.changeState = function (state) {
    $state.go(state);
  };

}
