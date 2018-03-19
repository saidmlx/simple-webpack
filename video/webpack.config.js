const path = require('path')
const extractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src/js/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath:'./dist/'
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test:/\.css$/,
                use: extractTextPlugin.extract({use:'css-loader'})
            },
            {
                test:/\.(jpg|png)$/,
                use:{
                    loader:'url-loader',
                    options:{limit:100000}
                }
            },
            {
                test:/\.(wot|ttf)$/,
                use:{
                    loader:'url-loader',
                    options:{limit:100000}
                }
            },
            {
                test:/\.(m4v|mp4)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:100000,
                        name:'viedeo/[name].[hash].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new extractTextPlugin('css/[name].css')
    ]    
    
}
