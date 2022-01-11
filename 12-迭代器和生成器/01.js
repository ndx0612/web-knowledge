// js规定，如果一个对象有next方法，next返回一个对象

const arr = [1, 2, 3, 4, 5]

// const iterator = {
//   i: 0,
//   next() {
//     return {
//       value: arr[this.i++], // 表示下一个数据的值
//       done: this.i > arr.length, // boolean,表示是否迭代完成
//     }
//   }
// }

function createIterator(arr) {
  let i = 0;
  return {
    next() {
      return {
        value: arr[this.i++], // 表示下一个数据的值
        done: this.i > arr.length, // boolean,表示是否迭代完成
      }
    }
  }
}

// 迭代器协议
// 拥有属性 Symbol.iterator ,并且值是一个迭代器创建函数,则该对象是可迭代的对象
// 调用数据的迭代器 iterator.next()
const iterator = arr[Symbol.iterator]();
Array.prototype.mypush = function (num) {
  var arr = [];
  for (let i = 0; i < this.length + num; i++) {
    arr[i] = num;
  }
  return arr;
}
console.log(arr.mypush(1));
