app.controller('OldGoods', ['$scope', "GoodsService", function ($scope, GoodsService) {
  $scope.cart = GoodsService.cart();
  $scope.goods = GoodsService.goods();
  $scope.addToCart = function () {
    GoodsService.addToCart(this.good, this.amount)
    console.log($scope.cart, 'CART');
  }
  $scope.quantity = true;
  $scope.change = true;

  $scope.toggleInput = function () {
    console.log('in func');
    $scope.quantity = false;
    $scope.change = false;
  }
  $scope.newAmt;
  $scope.editQuantity = function () {
    GoodsService.editQuantity(this.good, this.newAmt)
    $scope.quantity = true;
    $scope.change = true;
  }

  $scope.removeGood = function () {
    GoodsService.removeGood(this.good);
  }
}])
