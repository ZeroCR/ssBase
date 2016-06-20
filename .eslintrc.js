module.exports = {
  "extends": "standard",
  "env": {
    "browser": true,
    "es6": true,
    "commonjs": true
  },
  "plugins": [
    "standard",
    "promise",
    "jsdoc"
  ],
  "rules": {
    "semi": [2, "always"],
    "quotes": [2, "single"],
    "no-useless-constructor": 1,
    "no-unused-vars": 1,
    "eol-last": 1
  },
  "globals": {
    "inject": true,
    "angular": true,
    "sinon": true,
    "describe": true,
    "beforeEach": true,
    "afterEach": true,
    "expect": true,
    "it": true,
    "$": true
  }
};

