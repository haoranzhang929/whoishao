const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = [
  {
    entry: {
      main: ["./style/app.scss", "./scripts/style.js", "./scripts/main.js"],
      particles: ["./scripts/particles.js"]
    },
    output: {
      path: __dirname + "/build",
      filename: "[name].bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "bundle.css"
              }
            },
            { loader: "extract-loader" },
            { loader: "css-loader" },
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [autoprefixer()]
              }
            },
            {
              loader: "sass-loader",
              options: {
                includePaths: ["./node_modules"]
              }
            }
          ]
        },
        {
          test: /\.js$/,
          loader: "babel-loader",
          query: {
            presets: ["es2015"],
            plugins: ["transform-object-assign"]
          }
        }
      ]
    },
    plugins: [
      new CopyWebpackPlugin([{ from: "assets", to: "./assets" }]),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "pages/index.html",
        chunks: ["main", "particles"],
        inject: false
      }),
      new HtmlWebpackPlugin({
        filename: "contact.html",
        template: "pages/contact.html",
        chunks: ["main", "particles"],
        inject: false
      }),
      new HtmlWebpackPlugin({
        filename: "about.html",
        template: "pages/about.html",
        chunks: ["main", "particles"],
        inject: false
      }),
      new HtmlWebpackPlugin({
        filename: "projects.html",
        template: "pages/projects.html",
        chunks: ["main", "particles"],
        inject: false
      })
    ]
  }
];
