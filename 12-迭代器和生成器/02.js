const arr = [1, 2, 3, 4, 5]

// 写法一
// const iterator = arr[Symbol.iterator]();
// let result = iterator.next();

// while (!result.done) {
//   const item = result.value;
//   console.log(item);
//   result = iterator.next();
// }

const obj1 = {
  name: 'tom',
  age: 29,
  arr1: [1, 2, 3]
}


// for..of 遍历数组
for (const item of arr) {
  console.log(item);
}

console.log('------------');

// for..in 遍历对象
for (const item in obj1) {
  console.log(item, obj1[item]);
}
