

var path = require('path');
// 导入插件
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var config = {
    // webpack 编译的入口文件
    entry: {
        // 配置的单入口
        main: './main'
    },
    //webpack 编译的出口文件
    // 这里配置的打包后的文件会存储为 vue-wb/dist/main.js
    output: {
        // 存放打包后的文件输出目录
        path: path.join(__dirname, './dist'),
        // 资源文件引用的目录
        publicPath: '/dist/',
        // 输出文件的名称
        filename: 'main.js'
    },

    // module 对象中的 rules 属性中可以指定一系列的loaders,每一个 loader 都
    // 包含一个 test 和 use 选项
    // 当 webpack 编译过程中遇到 require() 或者 import 语句导入一个后缀名为 .css 
    // 文件时，先将它通过 css-loader 转换,再通过 style-loader 转换，然后继续打包
    module: {
        rules: [
            {
                test: /\.css$/,
                use:ExtractTextPlugin.extract({
                    use:'css-loader',
                    fallback:'style-loader'
                })
            }
        ]
    },
    plugins:[
        // 重新命名后的 css 文件
        new ExtractTextPlugin("main.css")
    ]
};

module.exports = config;