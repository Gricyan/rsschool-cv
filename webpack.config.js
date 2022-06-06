const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');

const myEslintOptions = {
  extensions: [`js`],
  exclude: [`node_modules`],
};

module.exports = {
  context: path.resolve(__dirname, 'src'),  
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new ESLintPlugin(myEslintOptions),
    new CleanWebpackPlugin(),
    new TerserPlugin(),
    new CssMinimizerPlugin(),
    new HtmlWebpackPlugin({
    title: 'CV Ivan Hryhoriev', 
    filename: 'index.html',         
    template: './index.html',
    minify: {
      collapseWhitespace: true
    }    
  }),    
  new MiniCssExtractPlugin({
    filename: 'style.css'
  }),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, './favicon.ico')
      },
      {
        from: "./assets/",
        to: "./assets/",
        force: true,
        noErrorOnMissing: true,
      },
      {
        from: path.resolve(__dirname, './src/js/rainbow.js'),
        info: (file) => ({ minimized: true }),
      }
    ]
  }),
],
module: {
  rules: [
    {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    },
    {
      test: /\.s[ac]ss$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader",],
     },
    {
      test: /\.svg$/,        
      type: 'asset/inline',
    },
    {
      test: /\.ttf$/,
      type: 'asset/resource', 
      generator: {
        filename: 'assets/fonts/[name][ext][query]'
      }      
    },
    {
      test: /\.m?js$/,
      exclude: /node_modules/,      
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
},
  devServer: {
    port: 8080,
  }
};