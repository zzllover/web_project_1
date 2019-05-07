

var deepCopy = function (obj, c) {
  var res = c || {};
  for (const key in obj) {
    if (typeof obj[key] == 'object') {
      res[key] = (obj[key].constructor == Array) ? [] : {};
      deepCopy(obj[key], res[key]);
    } else {
      console.log("key=", key)
      console.log("value=",obj[key])
      res[key] = obj[key];
    }
  }
  return res;
}

var obj = {
  name: 'pxm',
  xg: {
    yund: 'lanqiu',
    aaa: 'ss'
  },
  ss: [1, 2],
  func: () => {
    console.log("222")
  }
}

var res = deepCopy(obj);
console.log(res)

// console.log([] || {})

// console.log([])