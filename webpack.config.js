/*
 * Webpack configuration fle
 */

 module.exports = {
   /* The source dir where all dev code is stored
    */
   context: __dirname + "/src",
   entry: {
     javascript: "./app.jsx",
     html: "./index.html",
   },

   output: {
     filename: "app.js",
     // location for generated code
     path: __dirname + "/build",
   },

   module: {
     loaders: [
       // HTML files
       {
         test: /\.html$/,
         loader: "file?name=[name].[ext]",
       },

       // JSX and JS files
       {
         test: /\.(js|jsx)$/,
         exclude: /node_modules/,
         loaders: [
           "react-hot",
           "babel-loader"
         ],
       },

       // SCSS files
       {
         test: /\.scss$/,
         include: /src/,
         loaders: [
           "style",
           "css",
           "autoprefixer?browsers=last 3 versions",
           "sass?outputStyle=expanded"
         ],
       },
     ],
   },
 }
