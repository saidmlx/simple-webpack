const path = require('path')
const extractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
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
            }
        ]
    },
    plugins: [
        new extractTextPlugin('css/styles.css')
    ]    
    
}
