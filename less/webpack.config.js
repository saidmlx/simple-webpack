const path = require('path')
const extractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src/js/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015','react']
                    }
                }
            },
            {
                test:/\.css$/,
                use: extractTextPlugin.extract({use:'css-loader'})
            },
            {
                test:/\.scss$/,
                use: extractTextPlugin.extract({
                    use:['css-loader','sass-loader']
                })
            },
            {
                // test: que tipo de archivo quiero reconocer,
                // use: que loader se va a encargar del archivo
                test: /\.styl$/,
                use: extractTextPlugin.extract({
                  // ['style-loader','css-loader']
                  // fallback: 'style-loader',
                  use: [
                    "css-loader",
                    {
                      loader: 'stylus-loader',
                      options: {
                        use: [
                          require('nib'),
                          require('rupture')
                        ],
                        import: [
                          '~nib/lib/nib/index.styl',
                          '~rupture/rupture/index.styl'
                        ]
                      }
                    }
                  ]
                }),
              },
            /*{
                test:/\.styl$/,
                use: extractTextPlugin.extract({
                    use:['css-loader',
                    {
                        loader:'stylus-loader',
                        options:{
                            use:[
                                require('nib'),
                                require('rupture')
                            ],
                            import:[
                                'node_modules/nib/lib/nib/index.styl',
                                'node_modules/rupture/rupture/index.styl'
                            ]
                        }
                    }
                    ]
                })
            },*/
            {
                test:/\.less$/,
                use: extractTextPlugin.extract({
                    use:['css-loader',{
                        loader:'less-loader',
                        options:{
                            noIeCompat:true
                        }
                    }]
                })
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
                test:/\.(json)$/,
                use:{
                    loader:'json-loader',
                    
                }
            }
        ]
    },
    plugins: [
        new extractTextPlugin('css/[name].css')
    ]    
    
}
