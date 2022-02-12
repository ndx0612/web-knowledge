// 节流：点击多次，每间隔1s发送一次请求

function throttle(fn, timer) {
  let isRun = true
  return function () {
    if (!isRun) {
      //休息时间 暂不接客
      return false
    }
    // 工作时间，执行函数并且在间隔期内把状态位设为无效
    isRun = false
    setTimeout(() => {
      fn()
      isRun = true;
    }, timer)
  }
}
