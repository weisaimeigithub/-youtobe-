// //状态
// class State {
//     constructor(color){
//         this.color = color
//     }

//     handle(context){
//         console.log(`turn to ${this.color} light`)
//         //设置状态
//         context.setState(this)
//     }
// }

// //主体
// class Context {
//     constructor(){
//         this.state = null
//     }

//     //获取状态
//     getState(){
//          return this.state
//     }

//     setState(state){
//          this.state = state
//     }
// }

// //test
// let context = new Context()

// let green = new State('green')
// let yellow = new State('yellow')
// let red = new State('red')

// //绿灯亮了
// green.handle(context)
// console.log(context.getState())

// //黄灯亮了
// green.handle(context)
// console.log(context.getState())

// //红灯亮了
// red.handle(context)
// console.log(context.getState())


import { StateMachine } from "javascript-state-machine";

// //初始化状态机模型
// let fsm = new StateMachine({
//     init:'收藏',
//     transitions:[
//         {
//             name:'doStore',
//             from:'收藏',
//             to:'取消收藏'
//         },
//         {
//             name:'deleteStore',
//             from:'取消收藏',
//             to:'收藏'
//         }
//     ],

//     methods:{
//         //监听执行收藏
//         onDoStore: function(){
//             alert('收藏成功')
//             updateText()
//         },
//         //监听取消收藏
//         onDeleteStore:function(){
//              alert('已经取消收藏')
//              updateText()
//         }

//     }
// })

// let btn = document.getElementById('btn1')

// btn.click(function(){
//     if(fsm.is('收藏')){
//         fsm.doStore()
//     }else{
//         fsm.deleteStore()
//     }
// })
// //更新按钮的文案
// function updateText(){
//     btn.text(fsm.state)
// }

// updateText()

//写一个简单的Promise

//状态机模型
let fsm = new StateMachine({
    init:'pending',//初始化状态
    transitions:[
        {
            name:"resolve",
            from:'pending',
            to:'fullfilled'
        },
        {
            name:'reject',
            from:'pending',
            to:'rejected'
        }

    ],

    methods:{
        //监听resolve
        onResolve:function(state,data){
            //state - 当前状态机实例；data - fsm.resolve(xxx) 传递的参数
            data.succesList.forEach(fn => fn())

        },

        //监听reject
        onReject:function(state,data){
            //state - 当前状态机实例：data - fsm.reject(xxx) 传递的参数
            data.failList.forEach(fn => fn())

        }
    }
})


//定义promise
class MyPromise {
    constructor(fn){
        this.succesList = []
        this.failList = []
        fn(function(){
            //resolve 函数
        },
        
        function(){
            //reject 函数
        })
    }

    then(succesFn,failFn){
        this.succesList.push(succesFn)
        this.failList.push(failFn)
    }
}

//测试代码
function loadImg(src){
    const promise = new Promise(function(resolve,reject){
         let img = document.createElement('img')
         img.onload = function(){
            resolve(img)
         }
         img.onerror = function(){
            reject()
         }
         img.src = src
    })

    return promise
}

let src = 'data:image/jpeg;base64,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'
let result = loadImg(src)


result.then(function(){
    console.log('ok1')
},function(){
    console.log('fail1')
})