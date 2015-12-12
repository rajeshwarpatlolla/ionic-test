angular.module('starter.services')
  .service('ProductService', ProductService);

function ProductService() {

  this.selectedProduct;

  this.setSelectedProduct = function (obj) {
    this.selectedProduct = obj;
  };
  this.getSelectedProduct = function () {
    return this.selectedProduct;
  };

}
