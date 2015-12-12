(function () {
  angular.module('starter.controllers')
    .controller('ProductDetailsController', ProductDetailsController);

  function ProductDetailsController($scope, $state, $timeout, $ionicSlideBoxDelegate, $ionicModal, $ionicActionSheet, $ionicPopup, $ionicScrollDelegate, ScrollService, ApiFactory, ProductService) {

    $scope.$on('$ionicView.beforeEnter', function () {
      $ionicSlideBoxDelegate.$getByHandle('productSliderDelegateHandle').update();
    });

    setTimeout(function () {
      $ionicSlideBoxDelegate.$getByHandle("productSliderDelegateHandle").update();
    }, 100);

    $ionicModal.fromTemplateUrl('templates/image-detail-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.imageDetailsModal = modal;
    });

    var imageModalDelegate = $ionicSlideBoxDelegate.$getByHandle('imageModalDelegateHandle');

    $scope.openImageDetailsModal = function () {
      $scope.imageDetailsModal.show();
    };

    $scope.closeImageDetailsModal = function () {
      $scope.imageDetailsModal.hide();
    };


    $scope.changeState = function (toState) {
      $state.go(toState);
    };

    function getProductsProducts() {
      ApiFactory
        .getProductsDataFact()
        .then(function (response) {
          $scope.productDetails = response[0];
        }, function (error) {
          console.log(error);
        })
    }

    if (ProductService.getSelectedProduct()) {
      $scope.productDetails = ProductService.getSelectedProduct();
    } else {
      getProductsProducts();
    }


  }

})();
