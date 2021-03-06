app.controller('OldGoods', ['$scope', function ($scope) {
  $scope.goods = [
    {
        _id: "55c8ee82152165d244b98300",
        name: "Vintage Record Player",
        year: '1952',
        price: 15400,
        inStock: 'true',
        rating: '1',
        imageUrl: "http://oldhousecrazy.files.wordpress.com/2012/10/old-house-crazy-diy-restore-an-old-stereo-console-02.jpg",
        quantity: 0,
        categories: [ "furniture", "music"]
    },

    {
        _id: "55c8ee82152165d244b98301",
        name: "Cow Bell",
        year: '1973',
        price: 7348,
        inStock: 'true',
        rating: '2',
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSElyQK80NEgJs2YIXM3gcj2psoEOuQZgeM2e-Mt2bEMXKM82qD",
        quantity: 0,
        categories: ["decor", "music"]
    },
    {
        _id: "55c8ee82152165d244b98302",
        name: "Ancient Tea Pot",
        year: '1938',
        price: 4991,
        inStock: 'true',
        rating: '4',
        imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRHku4GnyiaVvCe2Ey1S5Ondcj_EPF0SScpkKd8dcIbs4OM0pnI",
        quantity: 0,
        categories: ["kitchen"]
    },
    {
        _id: "55c8ee82152165d244b98303",
        name: "Rocking Chair",
        year: '1959',
        price: 5496,
        inStock: true,
        rating: 1,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9aOP4REvFmDXRGoh3geQ5JU-HeBzLCkfv52eSOdeG0tEMfcW",
        quantity: 0,
        categories: ["furniture", "old", "awesome"]
    },
    {
        _id: "55c8ee82152165d244b98304",
        name: "Antique Telephone- Still Works!",
        ingredients: "cream of tartar, eggplant, cake, deer antler",
        caffeineScale: 181,
        price: 2445,
        inStock: true,
        rating: 1,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRqNCXm6cq-nlEjd9_B1L1oFokcMVLuPXZwJ0U9OuMmufBYHGJA",
        quantity: 0,
        categories: ["technology"]
    },
    {
        _id: "55c8ee82152165d244b98305",
        name: "Typewriter",
        year: '1982',
        price: 4486,
        inStock: true,
        rating: 3,
        imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQZKEfd2z3Po53n580yyRUG6zXe3l6WTqGqwQudnUIKp4VwIUHigw",
        quantity: 0,
        categories: ["technology"]
    },
    {
        _id: "55c8ee82152165d244b98306",
        name: "Train Car",
        year: '1924',
        price: 6973,
        inStock: true,
        rating: 3,
        imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRs7BqNvqD2YWCvKLVDZg7mN07JX_Q7zGOhXabBy5HtoM-YUaNnaQ",
        quantity: 0,
        categories: ["toy"]
    },
    {
        _id: "55c8ee82152165d244b98307",
        name: "Grandmas Good Ol' Quilt",
        year: '1967',
        price: 6003,
        inStock: true,
        rating: 2,
        imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQgoD8RfUFgGk4HIrP4inTRoLC2owRkYU9dxtRZ2Hjv0VGTvZ-z7g",
        quantity: 0,
        categories: ["furniture","decor"]
    },
    {
        _id: "55c8ee82152165d244b98308",
        name: "Old School Radio",
        year: '1964',
        price: 1374,
        inStock: true,
        rating: 3,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf9JHwwWYXcyzAq1lqdQ60gl7ST_nhXe5GpoE5cafxI-6VcbJFag",
        quantity: 0,
        categories: ["furniture","technology"]
    },
    {
        _id: "55c8ee82152165d244b98309",
        name: "Grandpas Original Cruiser Bike",
        year: '1979',
        price: 4158,
        inStock: true,
        rating: 2,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2idaurhjiHK_IDb4n4JcPQIHXb3LDEE1H2-NKbTWY8Eb42zw5",
        quantity: 0,
        categories: ["transportation", "toy"]
    }
  ]
  $scope.items = 2;

  $scope.cart = [];

  $scope.addToBag = function (good, amount) {
    console.log($scope.items, "ITEMS");
    $scope.items += Number(amount);
    good.quantity = amount;
    $scope.cart.push(good);
  }

  $scope.getItem = function () {
     console.log("item count: "+$scope.items);
     return $scope.items;
  }


}])
