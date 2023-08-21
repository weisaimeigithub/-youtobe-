const path = require('path')
const HtmlWebpackplugin = require('html-webpack-plugin')


module.exports = {
    entry:'./src/index.js',
    output:{
        path:__dirname,
        filename:'./release/bundle.js'
    },


    module:{
        rules:[
            
        ]
    },
    plugins:[
        new HtmlWebpackplugin({
            template:"./index.html"
        })
    ],

    devServer:{
        static:{
            directory:path.join(__dirname,'./release'), //根目录
        },
        open:true, //自动打开浏览器
        port:9001,
        proxy:{
            '/api/*':{
                target:'http://localhost:8880'
            }
        }
    }
}