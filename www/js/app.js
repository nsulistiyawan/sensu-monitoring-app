// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('unsmonapp.controllers', []);
angular.module('unsmonapp.services', []);
angular.module('unsmonapp', [
    'ionic',
    'unsmonapp.controllers',
    'unsmonapp.services'
  ])
  .constant('BASE_URL_SENSU_API', "https://your.sensu.server.com/api")
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
      var notificationOpenedCallback = function(jsonData) {
        alert("Notification received:\n" + JSON.stringify(jsonData));
        console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
      };
      // Update with your OneSignal AppId and googleProjectNumber before running.
      window.plugins.OneSignal.init("your-one-signal-app-id", {
          googleProjectNumber: "your-google-project-number"
        },
        notificationOpenedCallback);
    });
  })

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'OverviewCtrl'
      }
    }
  })

  .state('tab.client', {
    url: '/client',
    views: {
      'tab-client': {
        templateUrl: 'templates/tab-client.html',
        controller: 'ClientCtrl'
      }
    }
  })

  .state('tab.client-detail', {
    url: '/client-detail/:name',
    views: {
      'tab-client': {
        templateUrl: 'templates/tab-client-detail.html',
        controller: 'ClientDetailCtrl'
      }
    }
  })

  .state('tab.about', {
    url: '/about',
    views: {
      'tab-about': {
        templateUrl: 'templates/tab-about.html',
        controller: 'SettingCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/dash');
  // if none of the above states are matched, use this as the fallback

});
