// 生成器

// 生成器是通过构造函数Generator创建的对象，生成器既是一个迭代器，又是一个可迭代对象。

// 1、在function后面加上*，就是一个生成器
function* sum() {

}

const Gen = sum();
console.log(Gen);