

function deepCopy(p,c) {
  c = c || {};//c为空就初始化
  for (let key in p) {
    if (typeof p[key] == 'object') {
      c[key] = (p[key].constructor === Array) ? [] : {};
      deepCopy(p[key],c[key])
    } else {
      c[key] = p[key];
    }
  }
  return c;
}

var obj = {
  name: 'pxm',
  xg: {
    yund: 'lanqiu',
    aaa:'ss'
  },
  ss: [1, 2],
  func: () => {
    console.log("222")
  }
}

var res = deepCopy(obj);
console.log(res)
res.xg.aaa = "ssssssssss"
console.log(obj)
console.log(res)