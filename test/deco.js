@testt
class Math {
  constructor() {

  }

  @log
  add(a, b) {
    return a + b
  }
}

function testt(target) {
  console.log(target)
  target.prototype.bb = '非静态属性'
}

function log(target, key, descriptor) {
  console.log(target)
  console.log(key)
  console.log(descriptor)
  const oldValue = descriptor.value
  descriptor.value = (a, b) => {
    console.log('先打印日志等其他逻辑操作')
    return oldValue.call(this, a, b)
  }
}

const math = new Math()
math.add(5, 6)