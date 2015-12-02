angular.module('unsmonapp.controllers').controller('ClientDetailCtrl', [
  '$scope','SensuService','$stateParams','$q','$ionicLoading',
  function ($scope, SensuService, $stateParams, $q, $ionicLoading) {
    $scope.client = null;
    $scope.checks = [];
    $ionicLoading.show({
      template: 'Loading...'
    });
    $q.all([SensuService.getClient($stateParams.name),  SensuService.getClientHistory($stateParams.name)]).then(function (success) {
      $scope.client = success[0].data;
      var now = moment();
      angular.forEach(success[1].data, function (check) {
        check.diff = now.diff(moment.unix(check.last_execution),'seconds');
        $scope.checks.push(check);
        console.log(check);
      });
      $scope.client.diff = now.diff(moment.unix(($scope.client.timestamp)),'seconds');
      $ionicLoading.hide();
    }, function (error) {
      console.log(error);
    });
}]);
