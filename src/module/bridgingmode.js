class ColorShape {
    yellowCircle(){
        console.log('yellow circle')
    }

    redCircle(){
        console.log('red circle')
    }

    yellowTriangle(){
        console.log('yellow triangle')
    }

    redTriangle(){
        console.log('red triangle')
    }
}

//test
let cs = new ColorShape()
cs.yellowCircle()
cs.redCircle()
cs.yellowTriangle()
cs.redTriangle()
//Bridgingmode

class Color {
    constructor(name){
        this.name = name
    }
}

class Shape {
    constructor(name,color){
        this.name = name
        this.color = color
    }

    draw(){
        console.log(`${this.color.name} ${this.name}`)
    }
}

//测试代码
let red = new Color('red')
let yellow = new Color('yellow')
let circle = new Shape('circle',red)
circle.draw()
let triangle = new Shape('triangle',yellow)
triangle.draw()


//设计原则验证
//抽象和实现分离，解耦
//符合开放封闭原则
