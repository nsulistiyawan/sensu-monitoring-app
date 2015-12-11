angular.module('sensumobileapp.services').factory('SensuService', ['$http','BASE_URL_SENSU_API',function ($http, BASE_URL_SENSU_API) {

  var getAllClients = function() {
      return $http({
        method: 'GET',
        url: BASE_URL_SENSU_API+"/clients"
      });
    };

    var getClient = function (name) {
      return $http({
        method: 'GET',
        url: BASE_URL_SENSU_API+"/clients/"+name
      });
    };

    var getClientHistory = function (name) {
      return $http({
        method: 'GET',
        url: BASE_URL_SENSU_API+"/clients/"+name+"/history"
      });
    };


    var getAllChecks = function() {
      return $http({
        method: 'GET',
        url: BASE_URL_SENSU_API+"/checks"
      });
    };

    var getCheck = function (name) {
      return $http({
        method: 'GET',
        url: BASE_URL_SENSU_API+"/checks/"+name
      });
    };


    var getAllResults = function () {
      return $http({
        method: 'GET',
        url: BASE_URL_SENSU_API+"/results"
      });
    };

    var getAllEvents = function () {
      return $http({
        method: 'GET',
        url: BASE_URL_SENSU_API+"/events"
      });
    };

    var getResult = function (name) {
      return $http({
        method : 'GET',
        url : BASE_URL_SENSU_API+"/result/"+name
      });
    };

    var getAllStash = function () {
      return $http({
        method : 'GET',
        url : BASE_URL_SENSU_API+"/stashes"
      });
    };

    var getStash = function (path) {
      return $http({
        method : 'GET',
        url : BASE_URL_SENSU_API+"/stashes/"+path
      });
    };

    var postStash = function (path, data) {
      return $http({
        method : 'POST',
        url : BASE_URL_SENSU_API+"/stashes/"+path,
        data : data
      });
    };

    var deleteStash = function (path) {
      return $http({
        method : 'DELETE',
        url : BASE_URL_SENSU_API+"/stashes/"+path,
      });
    };

    var getSensuServerInfo = function () {
      return $http({
        method : 'GET',
        url : BASE_URL_SENSU_API+"/info"
      });
    };

    return {
      getAllClients: getAllClients,
      getClient : getClient,
      getClientHistory : getClientHistory,
      getAllChecks: getAllChecks,
      getCheck : getCheck,
      getAllResults : getAllResults,
      getResult : getResult,
      getStash : getStash,
      postStash : postStash,
      getAllStash : getAllStash,
      getAllEvents : getAllEvents,
      deleteStash : deleteStash,
      getSensuServerInfo : getSensuServerInfo
    };

}]);
