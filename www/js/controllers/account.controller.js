angular.module('starter.controllers')
  .controller('AccountCtrl', AccountCtrl);

function AccountCtrl($scope, $state) {

  $scope.changeState = function (state) {
    $state.go(state);
  };

}
