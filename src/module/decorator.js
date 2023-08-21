class Circle {
    draw(){
        console.log('画一个图形')
    }
}

class Decorator {
    constructor(circle){
        this.circle = circle //类传入的方式
    }

    draw(){
        this.circle.draw()
        this.setRedBorder(this.circle)
    }

    setRedBorder(circle){
        console.log('设置红色边框')
    }
}


//测试代码
let  circle = new Circle()
circle.draw()

let  dec = new Decorator(circle)
dec.draw()