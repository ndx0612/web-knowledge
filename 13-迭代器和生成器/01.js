// 属性描述符号

// const obj1 = {
//   a: 1,
//   b: 2
// }

// const desc = Object.getOwnPropertyDescriptor(obj1,"a");

// console.log(desc);

// 代理：提供修改底层实现的方式

const obj2 = {
  a: '1',
  b: 2,
}


const proxy = new Proxy(obj2, {
})

proxy.a = 3;

console.log(obj2);



