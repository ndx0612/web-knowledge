// 节流
function myThrottle(fun, delay) {
  let timer = null;

  let startTime = Date.now();

  return function () {

    let curTime = Date.now();
    let remain = delay - (curTime - startTime);
    let that = this;
    let args = arguments;
    
    clearTimeout(timer);

    if (remain <= 0) {
      fun.apply(that, args);
      startTime = Date.now();
    } else {
      timer = setTimeout(fun, remain);
    }
  }
}