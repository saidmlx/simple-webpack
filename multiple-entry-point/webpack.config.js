const path = require('path')
const extractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: {
        home:   path.resolve(__dirname, 'src/js/home.js'   ),
        contact:path.resolve(__dirname, 'src/js/contact.js'),
        products:path.resolve(__dirname, 'src/js/products.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
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
        new extractTextPlugin('css/[name].css')
    ]    
    
}
