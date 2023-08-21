// function testDec(isDec){
//     return function(target){
//         target.isDec = isDec
//     }
// }

// @testDec(false)
// class Demo{

// }

// alert(Demo.isDec)

// function mixins(...list){
//     return function(target){
//         Object.assign(target.prototype,...list)
//     }
// }

// const Foo = {
//     foo(){
//         alert('foo')
//     }
// }

// @mixins(Foo)
// class MyClass {

// }

// let obj = new MyClass()
// obj.foo()

//装饰方法案例一
// function reaonly(target,name,descriptor){
//     descriptor.writable = false
//     return descriptor
// }
// class Person {
//     constructor(){
//         this.first = 'A'
//         this.last = 'B'
//     }

//     //装饰方法
//     @reaonly
//     name(){return `${this.first} ${this.last}`}
// }

// var  p = new Person()
// console.log(p.name())

// class Math {
//     //装饰方法
//     @log
//     add(a,b){
//         return a+b
//     }
// }

// const math = new Math();
// const result = math.add(2,4)  //执行的时候会执行log打印
// console.log('result',result)

// function log(target,name,descriptor){
//     var oldValue = descriptor.value;

//     descriptor.value = function(){
//         console.log(`calling ${name} with`,arguments)
//         return oldValue.apply(this,arguments);
//     };

//     return descriptor
// }

// function log(target,name,descriptor){
//     let oldValue = descriptor.value
//     descriptor.value = function(){
//         console.log(`calling ${name} width  ${arguments}`)
//         return oldValue.apply(this,arguments)
//     }
//      return descriptor
// }

// class Math {
//     @log
//     add(a,b){
//         return a + b
//     }
// }

// let math = new Math()
// const result = math.add(2,4)

// import { readonly } from "core-decorators";
import {deprecate}  from 'core-decorators'

class Person {
    // @readonly
    @deprecate('即将废用',{url:'www.imooc.com'})  //会在控制台下告诉用户
    name(){
        return 'zhang san'
    }
}

 let p = new Person()
 alert(p.name)