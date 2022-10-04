import vueplugin from "rollup-plugin-vue";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import scss from "rollup-plugin-scss";
import copy from "rollup-plugin-copy";

let baseconfig = format => {
  return {
    input: "../src/ui/index.js",
    output: {
      name: "cat-design3",
      globals: {
        vue: "Vue",
      },
      exports: "named",
      extend: true,
      format,
      // sourceMap: false,
      file: `dist/cat-design3.${format}.js`,
    },
    external: ["vue"],

    plugins: [
      scss({
        output: "dist/css/cat-design3.css",
      }),
      // esbuild(),
      vueplugin({
        css: true,
      }),

      resolve(),
      babel({
        exclude: "node_modules/**", // 只编译我们的源代码
      }),
      copy({
        targets: [
          {
            src: "../src/ui/style/fonts/*",
            dest: "dist/fonts",
          },
        ],
      }),
    ],
  };
};
// 打包2种
export default [baseconfig("esm"), baseconfig("umd")];
