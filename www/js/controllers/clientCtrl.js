angular.module('sensumobileapp.controllers').controller('ClientCtrl', [
  '$scope','SensuService','$ionicLoading','$q',function ($scope, SensuService,$ionicLoading, $q) {
    $scope.clients = [];
    $ionicLoading.show({
      template: 'Loading...'
    });

    $q.all([SensuService.getAllClients(), SensuService.getAllEvents()]).then(function (success) {
      console.log(success[1].data);
      angular.forEach(success[0].data, function (client) {
        var now = moment();
        client.warning = false;
        client.diff = now.diff(moment.unix(client.timestamp),'seconds');
        angular.forEach(success[1].data, function (event) {
          if(client.address == event.client.address){
            client.warning = true;
          }
        });
        $scope.clients.push(client);
      });
      $ionicLoading.hide();

    }, function (error) {
      console.log('error');
    });


    $scope.refreshClientData = function () {
      $q.all([SensuService.getAllClients(), SensuService.getAllEvents()]).then(function (success) {
        console.log(success[1].data);
        angular.forEach(success[0].data, function (client) {
          var now = moment();
          client.warning = false;
          client.diff = now.diff(moment.unix(client.timestamp),'seconds');
          angular.forEach(success[1].data, function (event) {
            if(client.address == event.client.address){
              client.warning = true;
            }
          });
          $scope.clients.push(client);
        });
        $scope.$broadcast('scroll.refreshComplete');

      }, function (error) {
        console.log('error');
      });


    };

}]);
