angular.module('starter.controllers')
  .controller('MenuCtrl', MenuCtrl);

function MenuCtrl($ionicPopover, $scope) {

  $ionicPopover.fromTemplateUrl('templates/more-options-popover.html', {
    scope: $scope
  }).then(function (popover) {
    $scope.moreOptionsPopover = popover;
  });

  $scope.openMoreOptionsPopover = function($event) {
    $scope.moreOptionsPopover.show($event);
  };
  $scope.closeMoreOptionsPopover = function() {
    $scope.moreOptionsPopover.hide();
  };

}
