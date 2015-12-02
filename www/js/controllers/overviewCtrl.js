angular.module('unsmonapp.controllers').controller('OverviewCtrl', ['$scope', 'SensuService', '$q', '$ionicLoading',
  function($scope, SensuService, $q, $ionicLoading) {
    $scope.events = [];
    $scope.sensu = null;
    $ionicLoading.show({
      template: 'Loading...'
    });
    $q.all([SensuService.getAllEvents(), SensuService.getAllResults(), SensuService.getSensuServerInfo()]).then(function(success) {
      $scope.events = success[0].data;
      console.log($scope.events);
      $scope.sensu = success[2].data;
      $ionicLoading.hide();
    }, function(error) {
      console.log(error);
    });

  }
]);
