var arr = [1, 2, 3, 5, 6]
var obj1 = {
  name: 'aaa',
  age: 20
}

// 浅拷贝
var arr1 = arr.slice();
var obj2 = Object.assign({}, obj1);
var obj3 = JSON.parse(JSON.stringify(obj1))


// 深度克隆
function deepClone(obj) {
  // 如果类型不是数组或对象
  if (typeof obj != 'object' || obj == null) {
    return obj;
  }
  var newObj = (obj.constructor === Array) ? [] : {};
  for (var i in obj) {
    newObj[i] = deepClone(obj[i])
  }
  return newObj;
}