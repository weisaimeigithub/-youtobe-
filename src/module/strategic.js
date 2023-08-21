// //
// class User{
//     constructor(type){
//         this.type = type
//     }

//     buy(){
//         if(this.type === 'ordinary'){
//             console.log('普通用户购买')
//         }else if(this.type === 'member'){
//             console.log('会员用户购买')
//         }else if(this.type === 'vip'){
//             console.log('vip 用户购买')
//         }
//     }
// }

// //test
// var u1 = new User('ordinary')
// u1.buy()
// var u2 = new User('memeber')
// u2.buy()
// var u3 = new User('vip')
// u3.buy()


class ordinaryUser{
    buy(){
        console.log('普通用户购买')
    }
}

class MemberUser{
    buy(){
        console.log('会员用户购买')
    }
}

class VipUser{
    buy(){
        console.log('vip 用户购买')
    }
}

 let u1 = new ordinaryUser()
 u1.buy()
 let u2 = new MemberUser()
 u2.buy()
 let u3 = new VipUser()
 u3.buy()

 //设计原则验证
 //不同策略，分开处理，而不是混合在一起
 //符合开放封闭原则