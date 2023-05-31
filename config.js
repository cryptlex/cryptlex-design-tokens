module.exports = {
  source: ["tokens/**/*.js"],
  platforms: {
    scss: {
      transformGroup: "scss",
      buildPath: "scss/",
      files: [
        {
          destination: "_variables.scss",
          format: "scss/variables",
        },
      ],
    },
    css: {
      transformGroup: "css",
      buildPath: "css/",
      files: [
        {
          format: "css/variables",
          destination: "variables.css",
        },
      ],
    },
    esm: {
      transformGroup: "js",
      buildPath: "esm/",
      files: [
        {
          format: "javascript/es6",
          destination: "index.js",
        },
      ],
    },
    cjs: {
      transformGroup: "js",
      buildPath: "cjs/",
      files: [
        {
          format: "javascript/module-flat",
          destination: "index.cjs",
        },
      ],
    },
    ts: {
      transformGroup: "js",
      buildPath: "./",
      files: [
        {
          format: "typescript/es6-declarations",
          destination: "index.d.ts",
        },
      ],
    },
  },
};
