// 案例一

// function books() {
//   var book = '1';
// }
// console.log(book);

// 案例二

// function a() {
//   b();
//   function b() {
//     c();
//     function c() {
//       console.log('我是C');
//     }
//   }
// }

// a();

// 案例3

function books() {
  var book = '1';
  return function () {
    console.log(book);
    console.log(typeof(bag));
  }
}
var bag = books();
bag()

// 全局对象：books、bag
// books对象：book
// 匿名函数：' ' 

// 案例四

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i++);
//   }, 1000);
// }
// console.log(i);