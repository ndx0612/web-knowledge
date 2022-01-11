// 正常正则验证字符串 reg.test(txt)
// 函数封装后

function check(reg, txt) {
  return reg.test(txt)
}

check(/\d+/g, 'test') // 判断是否有数字
check(/[a-z]+/g, 'test') // 判断是都有字母

// Currying后

function curryingCheck(reg) {
  return function (txt) {
    return reg.test(txt)
  }
}

var hasString = curryingCheck(/[a-z]+/g) // 判断是都有字母

console.log(hasString('123a'));