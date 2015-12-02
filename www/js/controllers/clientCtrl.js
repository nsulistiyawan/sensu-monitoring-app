angular.module('unsmonapp.controllers').controller('ClientCtrl', [
  '$scope','SensuService','$ionicLoading',function ($scope, SensuService,$ionicLoading) {
    $scope.clients = [];
    $ionicLoading.show({
      template: 'Loading...'
    });
    SensuService.getAllClients().then(function (success) {
      angular.forEach(success.data, function (client) {
        var now = moment();
        client.diff = now.diff(moment.unix(client.timestamp),'seconds');
        $scope.clients.push(client);
      });
      $ionicLoading.hide();
    }, function (error) {
      console.log(error);
    });

}]);
