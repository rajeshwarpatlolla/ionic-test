(function () {
  angular.module('starter.controllers')
    .controller('ProductsController', ProductsController);

  function ProductsController($scope, $state, $timeout, $ionicModal, $ionicPopup, $ionicScrollDelegate, ScrollService, ApiFactory) {

    $scope.changeState = function (toState) {
      $state.go(toState);
    };

    $scope.showSortOptions = function () {
      var myPopup = $ionicPopup.show({
        templateUrl: 'templates/sort-options.html',
        title: 'Sort By',
        subTitle: 'Please select a sort options',
        scope: $scope,
        buttons: [
          {
            text: '<b>Sort</b>',
            type: 'button-positive',
            onTap: function (e) {

            }
          }
        ]
      });
      myPopup.then(function (res) {
        console.log('Tapped!', res, $scope.choice);
      });

    };

    $scope.sortOptionsSelected = function (e) {
      console.log(e);
    };

    $ionicModal.fromTemplateUrl('templates/filter-options.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.filterModal = modal;
    });
    $scope.openFilterModal = function () {
      $scope.filterModal.show();
    };
    $scope.closeFilterModal = function () {
      $scope.filterModal.hide();
    };

  }

})();
