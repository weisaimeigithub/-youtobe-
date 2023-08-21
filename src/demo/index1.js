
// 第一题： 打车时，可以打专车或者快车。任何车都有车牌号和名称。---公共父类【车牌号名称】
//         不同车价格不同，快车每公里1元，专车每公里2元----子类【不同的价格】
//         行程开始时，显示车辆信息 ---形成一个车的类
//         行程结束时，显示打车金额（假定行程就5公里）
     
//      画出UML类图
//      用es6语法写出该示例

//总结画图思路  什么属性可以定位类  类里有什么  为什么是父类子类
//打车第一题代码
class Car {
    constructor(number,name){
        this.number = number
        this.name = name
    }
}

class Kuaiche extends Car{
    constructor(number,name){
        super(number,name)
        this.price = 1
    }
}

class zhuanche extends Car {
    constructor(number,name){
        super(number,name)
        this.price = 2
    }
}

class Trip {
    constructor(car){
        this.car = car
    }

    start(){
        console.log(`形成开始，名称：车牌号：${
            this.car.price
        }`)
    }

    end(){
        console.log('形成结束，价格：' + (this.car.price*5))
    }
}

let car = new Kuaiche(100,'桑塔纳')
let trip = new Trip(car)
trip.start()
trip.end()