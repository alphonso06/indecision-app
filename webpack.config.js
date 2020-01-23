const path = require('path')

const public = path.join(__dirname, 'public')

module.exports = {
    entry: './src/app.js',
    output: {
        path: public,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: public
    }
}