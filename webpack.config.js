const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
 template: "./src/index.html",
 filename: "./index.html"
});
module.exports = {
mode: "development",
  module: {
    rules: [{
   test: /\.(js|jsx)$/,
   exclude: /node_modules/,
   use: {
     loader: "babel-loader"
   }
 },
 {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: "babel-loader",

},
  {
   test: /\.css$/,
   use: ["style-loader", "css-loader"]
  }
]},
resolve: {
  extensions: ['', '.js', '.jsx'],
},
 plugins: [htmlPlugin],
 devServer: {
  port: 4000
},

};