const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");  
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 

// ^ these are plugins https://webpack.js.org/concepts/plugins/#usage

/* Relevant Loader & Plugin Docs 
  
  html-loader -  https://github.com/jantimon/html-webpack-plugin#plugins
  pug-loader  -  https://github.com/pugjs/pug-loader#pug-loader
  css-loader  -  https://github.com/webpack-contrib/mini-css-extract-plugin#mini-css-extract-plugin
  sass-loader -  https://github.com/webpack-contrib/sass-loader#sass-loader
  babel-loader - https://github.com/babel/babel-loader#babel-loader 
  vue-loader  -  https://vue-loader.vuejs.org/en/features/hot-reload.html 

*/

module.exports = {
  /* basically optional in webpack 4 
    entry: "./src/index.js",

    // Here the application starts executing
    // and webpack starts bundling

    output: {

      // options related to how webpack emits/outputs results

      path: path.resolve(__dirname, "dist"),

      // the target directory for all output files

      // https://webpack.js.org/concepts/module-resolution/
      // https://webpack.js.org/configuration/resolve/

      filename: "bundle.js", // string

      // the filename template for entry chunks

      publicPath: "/assets/", // string

      // the url to the output directory resolved relative to the HTML page

    },*/
  module: {
    rules: [

      // module.rules, ie:**here**, allows you to specify the loaders you want to use. use **test** to specify what it's looking for, and specific witin the **use** property
      // List of Loaders https://webpack.js.org/loaders/

      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },

      {
        test: /\.css$/,
      //  use vs loader - https://webpack.js.org/configuration/module/#rule-use - works as a shorthand sometimes?
        use: [
         MiniCssExtractPlugin.loader,
         "css-loader"
        ]
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [

    // Info about plugins property https://webpack.js.org/concepts/plugins/#configuration

    new HtmlWebPackPlugin({
      template: "./src/public/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  devServer: {

    // https://webpack.js.org/configuration/dev-server/
    // https://webpack.js.org/guides/development/

    // contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
    // compress: true, // enable gzip compression
    // historyApiFallback: true, // true for index.html upon 404, object for multiple paths

    // hot: true, //  hot module replacement **Breaks build without having it and turning on ** Depends on HotModuleReplacementPlugin    //  https://webpack.js.org/concepts/hot-module-replacement/


    port: 3000,
    noInfo: true, // only errors & warns on hot reload
  },
};