function deepClone(source) {
  // 如果类型不是对象
  if (typeof source != "object") {
    return source;
  }
  // 如果为null
  if (source == null) {
    return source;
  }
  var newObj = (source.constructor === Array) ? [] : {}; //开辟一块新的内存空间
  for (var i in source) {
    newObj[i] = deepClone(source[i]);
  }
  return newObj;
}

const obj1 = {
  name: 'tom',
  age: 20,
  arr: [1, 2, 3, 4]
}

const obj2 = deepClone(obj1);
obj2.arr = [5, 6, 7];
console.log(obj1);
console.log(obj2);