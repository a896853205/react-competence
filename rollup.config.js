import typescript from "@rollup/plugin-typescript";
import resolve from "rollup-plugin-node-resolve";
import jsx from 'acorn-jsx';

export default {
  input: "src/index.ts",
  external: ["react", "react-dom"],
  globals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  output: {
    file: "dist/bundle.cjs.js",
    format: "cjs",
    name: "react-competence",
  },
  acornInjectPlugins: [jsx()],
  plugins: [
    typescript({
      lib: ["es5", "es6"],
      target: "es5",
      exclude: "node_modules/**",
      jsx: "preserve",
    }),
    resolve(),
  ],
};
