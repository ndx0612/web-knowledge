var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function deepCopy(source) {
  if (typeof source != "object") {
    return source;
  }
  if (source == null) {
    return source;
  }
  var newObj = source.constructor === Array ? [] : {};  //开辟一块新的内存空间
  for (var i in source) {
    newObj[i] = deepCopy(source[i]);
  }
  return newObj;
}

function getNewArr(arr) {
  var newArr = deepCopy(arr)
  for (let i = 0; i < newArr.length; i++) {
    var index = Math.floor(Math.random() * newArr.length);
    // var swap = newArr[i];
    // newArr[i] = newArr[index];
    // newArr[index] = swap;
    [newArr[i], newArr[index]] = [newArr[index], newArr[i]]
  }
  return newArr;
}

console.log(getNewArr(arr));