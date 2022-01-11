var cost = (function () {
  var arr = [];
  return function () {
    if (arguments.length == 0) {
      console.log(arr);
      var money = 0;
      for (let i = 0; i < arr.length; i++) {
        money += arr[i]
      }
      return money;
    } else {
      arr.push(...arguments)
    }
  }
})()

cost(100);
cost(200);
console.log(cost());
