// entry point and output bundle
// https://webpack.js.org/concepts/#entry
const path = require('path');

module.exports = (env) => {

    const isProduction = env === 'production';

    return {
        entry: './src/app.js',
        //entry: './src/playground/hoc.js',
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
        devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            // Make index.html be served for all end points, prevents 404s
            historyApiFallback: true
        }
    };
};