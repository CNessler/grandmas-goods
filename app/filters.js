app.filter("decimals", function () {
  return function (num) {
    num = num.toString().split("")
    var length = num.length - 2;
    var mixed = num.splice(length, 0, '.');
    return "$"+num.join("")
  }
})
