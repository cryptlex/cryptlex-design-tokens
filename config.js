module.exports = {
  "source": [
    "tokens/**/*.js"
  ],
  "platforms": {
    "scss": {
      "transformGroup": "scss",
      "buildPath": "build/scss/",
      "files": [
        {
          "destination": "_variables.scss",
          "format": "scss/variables"
        }
      ]
    },
    "css": {
      "transformGroup": "css",
      "buildPath": "build/css/",
      "files": [
        {
          "format": "css/variables",
          "destination": "variables.css"
        }
      ]
    },
    "esm": {
      "transformGroup": "js",
      "buildPath": "build/esm/",
      "files": [
        {
          "format": "javascript/es6",
          "destination": "variables-esm.js"
        },
        {
          "format": "typescript/es6-declarations",
          "destination": "variables-esm.d.ts"
        }
      ]
    },
    "cjs": {
      "transformGroup": "js",
      "buildPath": "build/cjs/",
      "files": [
        {
          "format": "javascript/module",
          "destination": "variables-cjs.js"
        },
        {
          "format": "typescript/module-declarations",
          "destination": "variables-cjs.d.ts"
        }
      ]
    }
  }
}