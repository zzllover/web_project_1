// ES5
function curry(fn) {
  function _c(restNum, argsList) {
    return restNum === 0 ?
      fn.apply(null, argsList) :
      function (x) {
        return _c(restNum - 1, argsList.concat(x));
      };
  }
  return _c(fn.length, []);
}

// ES6
const curry = fn => {
  const _c = (restNum, argsList) => restNum === 0 ?
    fn(...argsList) : x => _c(restNum - 1, [...argsList, x]);

  return _c(fn.length, []);
}

/***************** 使用 *********************/

var plus = curry(function (a, b) {
  return a + b;
});

// ES6
const plus = curry((a, b) => a + b);

plus(2)(4); // => 6