const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const webpackConfig = () => {
  if (process.env.npm_build_lib) {
    return {};
  }
  return {
    resolve: {
      symlinks: false,
      alias: {
        vue: path.resolve("./node_modules/vue"),
      },
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          // components: {
          //   name: "chunk-ui",
          //   test: /[\\/]src\/ui[\\/]/,
          //   chunks: "all",
          //   priority: 6,
          //   reuseExistingChunk: true,
          //   enforce: true
          // },
          runtimeChunk: {
            name: "manifest",
          },
        },
      },
    },
  };
};

const resolve = dir => {
  return path.join(__dirname, dir);
};
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: process.env.NODE_ENV !== "production",
  chainWebpack: config => {
    // 配置一个别名
    config.resolve.alias.set("$cat-design3", resolve("rollup-build"));
    if (process.env.npm_config_report) {
      config
        .plugin("webpack-bundle-analyzer")
        .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
    }
  },
  configureWebpack: webpackConfig(),
});
