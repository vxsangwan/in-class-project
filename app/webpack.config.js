const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development', // Set mode to 'development'
    entry: './index.js', // Entry point for your application
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js', // Output bundle file name
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Transpile JavaScript files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'], // Use Babel for ES6+ compatibility
                    },
                },
            },
            {
                test: /\.scss$/, // Process SCSS files
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // Use this HTML template
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css', // Output CSS file name
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Serve files from the 'dist' directory
        },
        compress: true, // Enable gzip compression
        port: 8080, // Port for the development server
        open: true, // Automatically open the browser
    },
};