angular.module('sensumobileapp.controllers').controller('OverviewCtrl', ['$scope', 'SensuService', '$q', '$ionicLoading',
  function($scope, SensuService, $q, $ionicLoading) {
    $scope.events = [];
    $scope.sensu = null;
    $ionicLoading.show({
      template: 'Loading...'
    });
    $q.all([SensuService.getAllEvents(), SensuService.getAllResults(), SensuService.getSensuServerInfo(), SensuService.getAllStash()]).then(function(success) {
      $scope.events = success[0].data;
      console.log($scope.events);
      $scope.sensu = success[2].data;
      console.log(success[3].data);
      $ionicLoading.hide();
    }, function(error) {
      console.log(error);
    });

    $scope.refreshOverviewData = function () {
      $q.all([SensuService.getAllEvents(), SensuService.getAllResults(), SensuService.getSensuServerInfo()]).then(function(success) {
        $scope.events = success[0].data;
        $scope.sensu = success[2].data;
        $scope.$broadcast('scroll.refreshComplete');
      }, function(error) {
        console.log(error);
      });
    };

  }
]);
