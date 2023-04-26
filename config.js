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
    "ts": {
      "transformGroup": "js",
      "buildPath": "build/ts/",
      "files": [
        {
          "format": "javascript/es6",
          "destination": "variables.js"
        },
        {
          "format": "typescript/es6-declarations",
          "destination": "variables.d.ts"
        }
      ]
    }
  }
}