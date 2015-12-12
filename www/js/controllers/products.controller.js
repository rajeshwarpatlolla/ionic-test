(function () {
  angular.module('starter.controllers')
    .controller('ProductsController', ProductsController);

  function ProductsController($scope, $state, $timeout, $ionicModal, $ionicActionSheet, $ionicPopup, $ionicScrollDelegate, ScrollService, ApiFactory, ProductService) {

    $scope.sortType;
    $scope.sortReverse;
    $scope.wishlistItems = [];
    $scope.cartItems = [];

    function getProductsProducts() {
      ApiFactory
        .getProductsDataFact()
        .then(function (response) {
          $scope.allProducts = response;
          ProductService.setAllProducts(response);
        }, function (error) {
          console.log(error);
        })
    }

    getProductsProducts();

    $scope.changeState = function (toState) {
      $state.go(toState);
    };

    $scope.goToProductDetailsPage = function (obj) {
      ProductService.setSelectedProduct(obj);
      $state.go('app.tabs.product-details');
    };

    $scope.addToWishList = function (obj, index) {
      if ($scope.wishlistItems.indexOf(obj.id) > -1) {
        angular.forEach($scope.wishlistItems, function (val, key) {
          if (val == obj.id) {
            $scope.wishlistItems.splice(key, 1);
          }
        });
      } else {
        $scope.wishlistItems.push(obj.id);
      }
    };

    $scope.addToWishCart = function (obj, index) {
      if ($scope.cartItems.indexOf(obj.id) > -1) {
        angular.forEach($scope.cartItems, function (val, key) {
          if (val == obj.id) {
            $scope.cartItems.splice(key, 1);
          }
        });
      } else {
        $scope.cartItems.push(obj.id);
      }
    };

    $scope.showSortOptions = function () {
      var actionSheetButtons = [
        {text: 'Popularity', sort_text: "popular"},
        {text: 'Newest First', sort_text: "latest"},
        {text: 'Price - Low to High', sort_text: "price"},
        {text: 'Price - High to Low', sort_text: "price"}
      ];

      $ionicActionSheet.show({
        buttons: actionSheetButtons,
        titleText: 'Sort By',
        cancelText: 'Close',
        cancel: function () {
          // add cancel code..
        },
        buttonClicked: function (index) {
          $scope.sortReverse = (index == 3 || index == 1 || index == 0);
          $scope.sortType = actionSheetButtons[index].sort_text;
          return true;
        }
      });

    };

    $ionicModal.fromTemplateUrl('templates/filter-options-modal.html', {
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
