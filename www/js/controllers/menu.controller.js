angular.module('starter.controllers')
  .controller('MenuCtrl', MenuCtrl);

function MenuCtrl($ionicPopover, $scope, $cordovaInAppBrowser) {

  $ionicPopover.fromTemplateUrl('templates/more-options-popover.html', {
    scope: $scope
  }).then(function (popover) {
    $scope.moreOptionsPopover = popover;
  });

  $scope.openMoreOptionsPopover = function ($event) {
    $scope.moreOptionsPopover.show($event);
  };
  $scope.closeMoreOptionsPopover = function () {
    $scope.moreOptionsPopover.hide();
  };

  $scope.openExternalLink = function () {
    try {
      $cordovaInAppBrowser
        .open('http://ngcordova.com', '_blank', {})
        .then(function (event) {
          // success
        })
        .catch(function (event) {
          // error
        });
    } catch (e) {
      console.log('error in $cordovaInAppBrowser');
    }
    $scope.closeMoreOptionsPopover();
  };

}
