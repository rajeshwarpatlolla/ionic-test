(function () {
  angular.module('starter.controllers')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl($scope, $timeout, $ionicScrollDelegate,ScrollService, ApiFactory) {

    $timeout(function () {
      return false;
      var sv1 = $ionicScrollDelegate.$getByHandle('horizontal1').getScrollView();
      ScrollService.handleScroll(sv1);
      var sv2 = $ionicScrollDelegate.$getByHandle('horizontal2').getScrollView();
      ScrollService.handleScroll(sv2);
      var sv3 = $ionicScrollDelegate.$getByHandle('horizontal3').getScrollView();
      ScrollService.handleScroll(sv3);
      var sv4 = $ionicScrollDelegate.$getByHandle('horizontal4').getScrollView();
      ScrollService.handleScroll(sv4);
      var sv5 = $ionicScrollDelegate.$getByHandle('horizontal5').getScrollView();
      ScrollService.handleScroll(sv5);
    });


    function getAllProducts() {
      ApiFactory
        .getAllDataFact()
        .then(function (response) {
          $scope.wholeData = response;
        }, function (error) {
          console.log(error);
        })
    }

    getAllProducts();

  }

})();
