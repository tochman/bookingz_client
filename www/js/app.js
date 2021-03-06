// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var bookingzClient = angular.module('bookingz',
  ['ionic',
    'ngCordova',
    'bookingz.constants',
    'bookingz.services',
    'ngResource',
    'emguo.poller',
    'ngStorage',
    'angularMoment',
    'ngActionCable'])

  .run(function ($ionicPlatform, $rootScope, amMoment) {
    amMoment.changeLocale('sv');
    $ionicPlatform.ready(function () {
      if (window.cordova) {
        window.plugins.insomnia.keepAwake();
      }

      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }


      $rootScope.currentUser = {userName: 'Test'};


    });

  })
  .run(function (ActionCableConfig, WS_URL) {
    ActionCableConfig.wsUri = WS_URL;
    ActionCableConfig.autoStart = true;
    ActionCableConfig.debug = true; // Turn off after this is working.
  })

  .config(function($ionicConfigProvider){
    $ionicConfigProvider.scrolling.jsScrolling(false);
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    var defaultRoute = '/display';

    $stateProvider
      .state('display', {
        url: '/display',
        templateUrl: 'templates/intro.html',
        controller: 'DisplayController'
      })

      .state('info-board', {
        url: '/info-board',
        templateUrl: 'templates/info-board.html',
        controller: 'IndexController'
      });
    $urlRouterProvider.otherwise(defaultRoute);
  });
