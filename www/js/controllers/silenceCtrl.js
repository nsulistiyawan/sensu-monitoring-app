angular.module('sensumobileapp.controllers')
.controller('SilenceCtrl', ['$scope','SensuService', '$q', '$ionicLoading',
function ($scope, SensuService, $q, $ionicLoading) {
  $scope.silents = [];

  $ionicLoading.show({
    template: 'Loading...'
  });

  SensuService.getAllStash().then(function (success) {
    $scope.silents = success.data;
    $ionicLoading.hide();
  }, function (error) {
    console.log(error);
  });

  $scope.deleteSilence = function (silence) {
    SensuService.deleteStash(silence).then(function (success) {
      console.log(success);
      $scope.silents.splice($scope.silents.indexOf(silence), 1);
    }, function (error) {
      console.log(error);
    });
  };

  $scope.refreshSilenceData = function () {
    SensuService.getAllStash().then(function (success) {
      $scope.silents = success.data;
      $scope.$broadcast('scroll.refreshComplete');
    }, function (error) {
      console.log(error);
    });


  };


}]);
