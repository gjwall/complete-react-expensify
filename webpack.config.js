// entry point and output bundle
// https://webpack.js.org/concepts/#entry
const path = require('path');

module.exports = {
    //entry: './src/app.js',
    entry: './src/playground/redux-101.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/, // Make sure the file ends in .js
            exclude: /node_modules/
        },
        {
            // Make sure the file ends in .scss or .css
            test: /\.s?(a|c)ss$/i, 
            use: [  
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS  
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader'
            ],
            exclude: /\.module.(s(a|c)ss)$/
        }]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        // Make index.html be served for all end points, prevents 404s
        historyApiFallback: true
    }
};