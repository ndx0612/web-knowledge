function add() {
  var _arr = Array.prototype.slice.call(arguments); // 定义一个数组，原来存放接收的参数
  // 在内部声明一个函数，利用闭包特性来接收所有数据
  var _adder = function () {
    _arr.push(...arguments);
    return _adder;
  }
  // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
  _adder.toString = function () {
    return _arr.reduce(function (a, b) {
      return a + b;
    });
  }
  return _adder;
}
console.log(add(1, 2, 3)(4) + 0); // 10