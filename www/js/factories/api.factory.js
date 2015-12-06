angular.module('starter.factories')
  .factory('ApiFactory', ApiFactory);

function ApiFactory($q, $resource) {
  var jsonResource = $resource('data/whole_data.json', null, {update: {method: 'PUT'}});

  function getAllDataFact() {
    var defer = $q.defer();
    jsonResource
      .get('', {}, function (response) {
        defer.resolve(response);
      }, function (error) {
        defer.reject(error);
      });
    return defer.promise;
  }

  return {
    getAllDataFact: getAllDataFact
  }

}
