// class ReadImg {
//     constructor(filename){
//         this.filename  = filename
//         this.loadFromDick() //初始化即从硬盘中加载，模拟
//     }

//     display(){
//         console.log('display...'+this.filename)
//     }
//     loadFromDick(){
//         console.log('loading...' + this.filename)
//     }
// }

// class ProxyImg {
//     constructor(filename){
//         this.realImg = new ReadImg(filename)
//     }

//     display(){
//         this.realImg.display()
//     }
// }

// //test
// let p = new ProxyImg('1.png')
// p.display()


//es6 proxy
//明星
let star = {
    name:'zhangxx',
    age:25,
    phone:'13453453454'
}

//经纪人
let agent = new Proxy(star,{
    get:function(target,key){
        if(key === 'phone'){
            return '12434234234'
        }

        if(key === 'price'){
            return 12000
        }

        return target[key]
    },

    set:function(target,key,val){
         if(key === 'customPrice'){
            if(val < 100000){
                //最低10w
                throw new Error('价格太低')
            }else {
                target[key] = value
                return true
            }
         }
    }
})

//test
console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)

agent.customPrice = 190000
console.log('agentcustomPrice',agent.customPrice)