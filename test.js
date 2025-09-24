Function.prototype.myBind = function (context) {
  if(typeof this !== 'function') {
    throw new TypeError('需使用函数调用mybind')
  }

  const fn = this,
  args = [...arguments].slice(1)

  return function Fn() {
    if (this instanceof Fn) {
      console.log('Fn', Fn)
      console.log('this', this)
      return new fn(...args, ...arguments)
    } else {
      return fn.apply(context, [...args, ...arguments])
    }
  }
}

function showInfo(age, city) {
  console.log(this.name, age, city)
}

const me = { name: 'ully' }

// const info = showInfo.myBind(me, 28, 'shanghai')

// info()

function Person(name, age) {
  this.name = name
  this.age = age
  console.log(this.name + this.age)
}
const BoundPerson = Person.myBind(null, 'ully', 28)

const personObj = new BoundPerson()
console.log('personObj', personObj)
