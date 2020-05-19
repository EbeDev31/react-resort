const path=require('path');

module.exports={
    entry:path.resolve(__dirname,'./src/index.js'),
    output:{
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'babel-loader'
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    devServer:{
        contentBase: path.resolve(__dirname, "./src"),
        historyApiFallback: true
      },
}