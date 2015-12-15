angular.module('starter.services', [])

  .service('loader', function ($ionicLoading) {

    this.show = function () {
      $ionicLoading.show({
        template: '<ion-spinner icon="bubbles" class="fill_ff"></ion-spinner>'
      });
    };

    this.hide = function () {
      $ionicLoading.hide();
    };

  });
