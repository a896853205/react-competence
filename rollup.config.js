import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/bundle.cjs.js",
    format: "cjs",
    name: "react-competence",
  },
  plugins: [
    typescript({
      lib: ["es5", "es6"],
      target: "es5",
			exclude: 'node_modules/**'
    }),
  ],
};
