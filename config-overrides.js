const path = require("path");
const {
  override,
  adjustStyleLoaders,
  fixBabelImports,
  addWebpackAlias,
} = require("customize-cra");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = override(
  // 配置公用sass文件
  adjustStyleLoaders(rule => {
    if (rule.test.toString().includes(('scss'))) {
      rule.use.push({
        loader: require.resolve('sass-resources-loader'),
        options: {
          resources: './src/assets/scss/index.scss'
        }
      });
    }
  }),
  // 路径别名
  addWebpackAlias({
    "@src": path.resolve(__dirname, "src"),
    "@assets": path.resolve(__dirname, "src/assets"),
    "@store": path.resolve(__dirname, "src/store"),
    "@util": path.resolve(__dirname, "src/util"),
    "@page": path.resolve(__dirname, "src/page"),
    "@components": path.resolve(__dirname, "src/components"),
    "@service": path.resolve(__dirname, "src/service"),
    "@types": path.resolve(__dirname, "src/types"),
  }),
  // 配置其他选项
  (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.devtool = false;
      config.plugins.push(new BundleAnalyzerPlugin({analyzerPort: 8919}));
    }

    return config
  }
);
