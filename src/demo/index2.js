//第二题
// 某停车场，分3层，每层100车位
// 每个车位都能监控到车辆的驶入和离开
// 车辆进入前，显示每层的空余车位数量 --- 停车场层信息Floor
// 车辆进入时，摄像头可识别车牌号和时间 --- 车位信息Place
// 车辆出时，出口显示器显示车牌号和停车时长 --- 停车场信息Park

//什么成为类 变量 方法属于哪些类 这个过程感受到了设计
//整体流程符合逻辑
//车辆
class Car{
    constructor(number){
        this.num = number
    }
}

//摄像头
class Camera {
    shot(car){  //传入car类
        return{
            num:car?car.num:"",
            inTime:Date.now()
        }
    }
}

//
class Screen{
   show(car,inTime){
         console.log('车牌号',car?car.num:'')
         console.log('停车时间',inTime?Date.now()-inTime:"")
    }
}
class Park{
    constructor(floors){
        this.floors = floors || []
        this.camera = new Camera()
        this.screen = new Screen()
        this.carList = {} //存储摄像头拍摄返回的车辆信息
    }
    in(car){
        //通过摄像头获取信息
         const info = this.camera.shot(car)
         //停车某个停车位
         const i = parseInt(Math.random() * 100%100)
         //通过随机数获取停车位
          const place = this.floors[0].places[i]
          place.in() //使其停车变为false
          info.place = place
          //记录信息
          this.carList[car.num] = info
    }

    out(car){
        //获取信息
        const info = this.carList[car.num]
        //将停车位情况
        const place = info.place
        place.out()
        //显示时间
        this.screen.show(car,info.inTime)
        //清空记录
        delete this.carList[car.num]
    }

    emptyNum(){
        return this.floors.map(floor =>{
            return `${floor.index}层还有${floor.emptyPlaceNum(floor)}层`
        }).join('\n')
    }
}

//层
class Floors {
    constructor(index,places){
        this.index = index
        this.places = places || []
    }

    emptyPlaceNum(){
          let num = 0
          this.places.forEach(p => {
                if(p.empty){
                    num = num + 1
                }
          });

          return num
    }
}

//车位
class Place{
    constructor(){
        this.empty = true
    }

    in(){
        this.empty = false
    }

    out(){
        this.empty = true
    }
}

//测试
//初始化停车场
 const floor = []
 for(let i = 0;i<3;i++){
    const places = []
    for(let j = 0;j<100;j++){
        places[j] = new Place()
    }
    floor[i] = new Floors(i+1,places)
 }

 const park = new Park(floor)

 //初始化车辆
  const car1 = new Car(100)
  const car2 = new Car(200)
  const car3 = new Car(300)

  console.log('第一量车进入')
  console.log(park.emptyNum())
  park.in(car1)
  console.log('第二量车进入')
  console.log(park.emptyNum())
  park.in(car2)

  console.log('第一辆车离开')
  park.out(car1)
  console.log('第二辆车离开')
  park.out(car2)

  console.log('第三辆车进入')
  console.log(park.emptyNum())
  park.in(car3)