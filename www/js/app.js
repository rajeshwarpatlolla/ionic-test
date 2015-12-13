// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic',
  'ngResource',
  'ionic-ratings',
  'starter.controllers',
  'starter.constants',
  'starter.directives',
  'starter.services',
  'starter.factories'
])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $stateProvider

      .state('intro', {
        url: '/intro',
        templateUrl: 'templates/intro.html',
        controller: 'IntroController'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'templates/signup.html',
        controller: 'SignupCtrl'
      })
      .state('reset-pwd', {
        url: '/reset-pwd',
        templateUrl: 'templates/reset-pwd.html',
        controller: 'ResetPwdCtrl'
      })

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'MenuCtrl'
      })

      .state('app.tabs', {
        url: '/tabs',
        views: {
          'menuContent': {
            templateUrl: 'templates/tabs.html'
          }
        }
      })

      .state('app.menu-only', {
        url: '/menu-only',
        views: {
          'menuContent': {
            templateUrl: 'templates/menu-only.html'
          }
        }
      })

      .state('app.tabs.home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
          }
        }
      })
      .state('app.tabs.products', {
        url: '/products',
        views: {
          'tab-home': {
            templateUrl: 'templates/products.html',
            controller: 'ProductsController'
          }
        }
      })
      .state('app.tabs.product-details', {
        url: '/product-details',
        views: {
          'tab-home': {
            templateUrl: 'templates/product-details.html',
            controller: 'ProductDetailsController'
          }
        }
      })
      .state('app.tabs.reviews', {
        url: '/reviews',
        views: {
          'tab-home': {
            templateUrl: 'templates/reviews.html',
            controller: 'ReviewsController'
          }
        }
      })

      .state('app.tabs.wishlist', {
        url: '/wishlist',
        views: {
          'tab-wishlist': {
            templateUrl: 'templates/wishlist.html',
            controller: 'WishListCtrl'
          }
        }
      })

      .state('app.tabs.cart', {
        url: '/cart',
        views: {
          'tab-cart': {
            templateUrl: 'templates/cart.html',
            controller: 'CartCtrl'
          }
        }
      })
      .state('app.tabs.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/account.html',
            controller: 'AccountCtrl'
          }
        }
      })
      .state('app.tabs.orders', {
        url: '/orders',
        views: {
          'tab-account': {
            templateUrl: 'templates/orders.html',
            controller: 'OrdersCtrl'
          }
        }
      })
      .state('app.tabs.addresses', {
        url: '/addresses',
        views: {
          'tab-account': {
            templateUrl: 'templates/addresses.html',
            controller: 'AccountCtrl'
          }
        }
      })
      .state('app.tabs.cards', {
        url: '/cards',
        views: {
          'tab-account': {
            templateUrl: 'templates/cards.html',
            controller: 'AccountCtrl'
          }
        }
      })
      .state('app.tabs.coupons', {
        url: '/coupons',
        views: {
          'tab-account': {
            templateUrl: 'templates/coupons.html',
            controller: 'AccountCtrl'
          }
        }
      })
      .state('app.tabs.wallet', {
        url: '/wallet',
        views: {
          'tab-account': {
            templateUrl: 'templates/wallet.html',
            controller: 'WalletCtrl'
          }
        }
      })
      .state('app.tabs.settings', {
        url: '/settings',
        views: {
          'tab-account': {
            templateUrl: 'templates/settings.html',
            controller: 'SettingsCtrl'
          }
        }
      })
      .state('app.tabs.terms', {
        url: '/terms',
        views: {
          'tab-account': {
            templateUrl: 'templates/terms.html',
            controller: 'AccountCtrl'
          }
        }
      })
      .state('app.tabs.contact', {
        url: '/contact',
        views: {
          'tab-account': {
            templateUrl: 'templates/contact.html',
            controller: 'AccountCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/intro');

    $ionicConfigProvider.tabs.position('bottom');

  });
