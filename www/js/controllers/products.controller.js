(function () {
  angular.module('starter.controllers')
    .controller('ProductsController', ProductsController);

  function ProductsController($scope, $state, $timeout, $ionicScrollDelegate, ScrollService, ApiFactory) {

    $scope.changeState = function (toState) {
      $state.go(toState);
    };

  }

})();
