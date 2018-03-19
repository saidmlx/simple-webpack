const path = require('path')
const extractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer:{
        port:4545
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use: extractTextPlugin.extract({use:'css-loader'})
            }
        ]
    },
    plugins: [
        new extractTextPlugin('css/styles.css')
    ]    
    
}
