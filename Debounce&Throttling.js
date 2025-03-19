// Debouncing and throttling

// this below function is HOC / Wrapper / Layout/ Decorator
// Pure JS logic function
function debounce(callBackFn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => callBackFn(...args), delay)
    }
  }
  function throttle(callBackFn, delay) {
    let execute = false;
    return function (...args) {
        if (!execute) {
            execute = true
            callBackFn(...args)
            setTimeout(() => execute = false, delay)
        }
    }
  }
  // debounce(handleChange, 1000)