

function test(obj) {
  console.log(obj.name)
}

test({ name: 'pxm' })

//使用结构赋值
function test1({name="默认值"}) {
  console.log(name)
}

test1({ name: 'zzl' });
test1({ });
