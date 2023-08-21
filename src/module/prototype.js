//一个原型对象
const prototype = {
    getName:function(){
        return this.first + ' ' + this.last
    },
    say:function(){
        alert('hello')
    }
}

//基于原型创建 x
let x = Object.create(prototype)
x.first = 'A'
x.last = 'B'
alert(x.getName())

//对比js中的原型prototype
// prototype 可以理解为es6 class的一种底层原理
// 而class是实现面向对象的基础，并不是服务于某个模式