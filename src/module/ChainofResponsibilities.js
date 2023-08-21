//请假审批，需要组长审批，经理审批，最后总监审批
class Action {
    constructor(name){
        this.name = name
        this.nextAction = null
    }

    setNextAction(action){
        this.nextAction = action
    }

    handle(){
        console.log(`${this.name} 审批`)
        if(this.nextAction != null){
            this.nextAction.handle()
        } 
    }
}

let a1 = new Action('组长')
let a2 = new Action('经理')
let a3 = new Action('总监')
a1.setNextAction(a2)
a2.setNextAction(a3)
a1.handle()

//设计原则验证
//发起者于各个处理者进行隔离
//符合开放封闭原则
