angular.module('starter.factories')
  .factory('ApiFactory', ApiFactory);

function ApiFactory($q, $resource) {
  var homeResource = $resource('data/home_page_data.json', null, {update: {method: 'PUT'}});
  var productsResource = $resource('data/products_page_data.json', null, {update: {method: 'PUT'}});

  function getHomePageDataFact() {
    var defer = $q.defer();
    homeResource
      .get('', {}, function (response) {
        defer.resolve(response);
      }, function (error) {
        defer.reject(error);
      });
    return defer.promise;
  }

  function getProductsDataFact() {
    var defer = $q.defer();
    productsResource
      .query('', {}, function (response) {
        defer.resolve(response);
      }, function (error) {
        defer.reject(error);
      });
    return defer.promise;
  }

  return {
    getHomePageDataFact: getHomePageDataFact,
    getProductsDataFact: getProductsDataFact
  }

}
