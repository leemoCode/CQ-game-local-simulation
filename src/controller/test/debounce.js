function test(str) {
  console.log('test:', str);
}

function debounce(func, delay = 500, callNow = true) {
  let timeout = null;
  return function () {
    // !timeout 说明此前没有等待触发的方法
    if (!timeout && callNow) {
      func.apply(this, arguments);
    }

    clearTimeout(timeout);


    timeout = setTimeout(() => {
      timeout = null;
      // callNow为true说明已经触发过一次了 直接返回
      if (callNow) {
        return;
      }
      func.apply(this, arguments);
    }, delay);

  }
}


// function debounce(func, wait = 500, immediate = true) {
//   let timeout
//   return function () {
//     const context = this, args = arguments

//     const later = function () {
//       timeout = null
//       if (!immediate) func.apply(context, args)
//     }

//     let callNow = immediate && !timeout

//     clearTimeout(timeout)

//     timeout = setTimeout(later, wait)
//     if (callNow) func.apply(context, args)
//   }
// }

const debounceFn = debounce(test, true);

debounceFn('hello');
debounceFn('hello');
debounceFn('hello');
debounceFn('hello');
debounceFn('hello');
debounceFn('hello');

setTimeout(() => {
  debounceFn('hello');
}, 800);
