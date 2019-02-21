module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "jest": true,
    "es6": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "modules": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "globals": {
    "element": true,
    "by": true,
    "waitFor": true,
    "device": true,
    "__DEV__": true
  },
  "rules": {
    "new-cap": 0,
    "no-console": "off",
    "indent": [
      "error", 2, {"SwitchCase": 1}
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
  }
};
