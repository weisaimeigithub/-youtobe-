const EventEmitter = require('events').EventEmitter

// const emitter1 = new EventEmitter()

// //监听 some 事件
// emitter1.on('some',info => {
//     console.log('fn1',info)
// })

// //监听 some 事件
// emitter1.on('some',info => {
//     console.log('fn2',info)
// })

// //触发 some 事件
// emitter1.emit('some', '1342')

//继承
// class Dog extends EventEmitter {
//     constructor(name){
//         super()
//         this.name = name
//     }
// }

// let simon = new Dog('simon')
// simon.on('bark',function(){
//     console.log(this.name,'barked')
// })

// setInterval(function(){
//     simon.emit('bark')
// },100)

//steam 用到自定义
const fs = require('fs')
// const readStream = fs.createReadStream('./asset/data/file.txt')

// let length = 0

// readStream.on('data',function(chunk){
//     length += chunk.toString().length
//     console.log('len',length)
//     length += length
// })

// readStream.on('end',function(){
//     console.log('length',length)
// })

// const ts = require('fs')
// const readline = require('readline')

// let rl = readline.createInterface({
//     input:fs.createReadStream('./asset/data/file.txt')
// })

// let lineNum = 0

// rl.on('line',function(line){
//     lineNum++
// })

// rl.on('close',function(){
//     console.log('lineNum',lineNum)
// })

// function serverCallback(req,res){
//     var method = req.method.toLowerCase() //获取请求的方法
//     if(method === 'get'){
//         console.log('get')
//     }

//     if(method === 'post'){
//         //接收post请求的内容
//         var data = ''
//         req.on('data',function(chunk){
//             //一点一点接收内容
//             data += chunk.toString()
//         })

//         req.on('end',function(){
//             //接收完毕，将内容输出
//             res.writeHead(200,{'Content-type':'text/html'})
//             res.write(data)
//             res.end()
//         })
//     }
// }