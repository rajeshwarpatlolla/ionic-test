(function () {
  angular.module('starter.controllers')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl($scope, $timeout, $ionicScrollDelegate, ScrollService) {

    $scope.cards = [];
    var exampleCard = {
      title: 'Test Card_',
      images: []
    }

    for (var i = 0; i < 25; i++) {
      exampleCard.images.push('https://pbs.twimg.com/profile_images/378800000614174413/c536e5e9333bbc1203dce395d7ab741b.jpeg');
    }

    for (var i = 0; i < 50; i++) {
      $scope.cards.push(exampleCard)
    }


  }

})();
