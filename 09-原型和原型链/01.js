function commonFun() {
  console.log('1');
}

function PersonFun(name, age) {
  this.name = name;
  this.age = age;
}

var f1 = new PersonFun('张三', 20)

console.log(typeof(f1));
console.log(typeof(commonFun()));

