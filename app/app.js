var app = angular.module("grandmasGoods", ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/partials/buy.html',
      controller: 'OldGoods'
    })
    .when('/cart', {
      templateUrl: '/partials/cart.html',
      controller: 'OldGoods'
    })

  $locationProvider.html5Mode(true);
})
