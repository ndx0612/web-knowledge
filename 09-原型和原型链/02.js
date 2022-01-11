let a = [1, 2]
a.toString()   // "1,2"
console.log(a.toString());

Array.prototype.mypush = function (num) {
  var arr = [];
  for (let i = 0; i < this.length + num; i++) {
    arr[i] = num;
  }
  return arr;
}
console.log(arr.mypush(1));