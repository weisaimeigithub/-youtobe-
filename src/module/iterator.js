// class Iterator {
//     constructor(container){
//         this.list = container.list
//         this.index = 0
//     }
//     next(){
//         if(this.hasNext()){
//             return this.list[this.index++]
//         }
//         return null
//     }

//     hasNext(){
//          if(this.index >= this.list.length){
//             return  false
//          }

//          return true
//     }
// }

// class Container{
//     constructor(list){
//         this.list = list
//     }

//     //生成遍历器
//     getIterator(){
//         return new Iterator(this)
//     }
// }

// let arr = [1,2,3,4,5,6]
// let container = new Container(arr)
// let iterator = container.getIterator()
// while(iterator.hasNext()){
//     console.log(iterator.next())
// }

//es6 iterator示例
// function each(data){
//     //生成遍历器
//      let iterator = data[Symbol.iterator]()

//      let item = {done:false}
//      while(!item){
//         item = iterator.next()
//         if(!item.done){
//             console.log(item.value)
//         }
//      }
// }

// let arr = [1,2,3,4]
// let m = new Map()
// m.set('a',100)
// m.set('b',200)

// each(arr)
// each(m)

function each(data){
    //生成遍历器
    //  let iterator = data[Symbol.Interator]()
    //  let item = {done:false}
    //  while(!item.done){
    //     item =  iterator.next()
    //     if(!item.done){
    //         console.log(item.value)
    //     }
    //  }

    for(let item of data){
        //带有遍历器特性的对象  data[Symbol.iterator]有值
        console.log(item)
    }
}

let arr = [1,2,3,4]
let nodeList = document.getElementsByTagName('p')
let m = new Map()
m.set('a',100)
m.set('b',100)

each(arr)
each(nodeList)
each(m)