let arr1 = [1, 2, ['a', 'b', [[1, 2, 3, [11, 21, 31]]]], 3];

// 方法一
function iterTree2(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

// 方法二：直接使用ES6中的方法
// console.log(arr1.flat(Infinity)); 

console.log(iterTree2(arr1));