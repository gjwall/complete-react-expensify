// entry point and output bundle
// https://webpack.js.org/concepts/#entry
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {

    const isProduction = env === 'production';
    //const CSSExtract = new MiniCssExtractPlugin();

    return {
        entry: './src/app.js',
        //entry: './src/playground/hoc.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
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
                    // New plugin loader
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS  
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    // Compiles Sass to CSS
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ],
                exclude: /\.module.(s(a|c)ss)$/
            }]
        },
        plugins: [
            new MiniCssExtractPlugin()
        ],
        devtool: isProduction ? 'source-map' : 'source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            // Make index.html be served for all end points, prevents 404s
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    };
};