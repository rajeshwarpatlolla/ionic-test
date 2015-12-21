angular.module('starter.controllers')
  .controller('MenuCtrl', MenuCtrl);

function MenuCtrl($ionicPopover, $scope, $state, $cordovaInAppBrowser, $cordovaSocialSharing) {

  $ionicPopover.fromTemplateUrl('templates/more-options-popover.html', {
    scope: $scope
  }).then(function (popover) {
    $scope.moreOptionsPopover = popover;
  });

  $scope.changeState = function (toState) {
    $state.go(toState);
  };

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


  $scope.shareonFaceBook = function () {
    $cordovaSocialSharing
      .shareViaFacebook('E-Commerce App', 'Subject', 'http://www.hydramarketingtechnology.com/wp-content/uploads/2013/10/E-Commerce-Icon.png')
      .then(function (result) {
        // Success!
        console.log('Social share Success');
      }, function (err) {
        // An error occurred. Show a message to the user
        console.log('Social share Error');
      });
  };

}
