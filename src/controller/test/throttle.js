function func(str) {
  console.log(str);
}

function throttle(func, delay = 500, callNow = true) {
  let timer = null;

  return function () {
    console.log(timer);
    if (timer) {
      return;
    }

    if (callNow) {
      func.apply(this, arguments);
    }

    timer = setTimeout(() => {
      timer = null;

      if (callNow) {
        return;
      }
      func.apply(this, arguments);

    }, delay);
  }
}

function throttle1(func, delay = 500, callNow = true) {
  let pre = callNow ? 0 : +new Date();

  return function () {
    const now = +new Date();

    if (now - pre >= delay) {
      func.apply(this, arguments);

      pre = now;
    }
  }


}

const throttleFn = throttle1(func);

throttleFn('hello d');

setTimeout(() => {
  throttleFn('hello d');


}, 800);


setInterval(() => {
  throttleFn('hello d');

}, 800);
