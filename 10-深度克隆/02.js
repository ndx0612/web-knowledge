function deepClone(source) {
  if (source.constructor === Array) {
    var newArr = [];
    for (var i = 0; i < source.length; i++) {
      newArr.push(deepClone(source[i]));
    }
    return newArr;
  }
  else if (typeof source === "object") {
    var newObj = {};
    for (var prop in source) {
      //深度克隆
      newObj[prop] = deepClone(source[prop]);
    }
    return newObj;
  }
  else {
    return source; //递归的终止条件
  }
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
