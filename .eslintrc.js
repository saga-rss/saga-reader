module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    // recommended react rules
    "plugin:react/recommended",
    // recommended typescript rules (from eslint)
    "plugin:@typescript-eslint/recommended",
    // let prettier format override eslint
    "prettier/@typescript-eslint",
    // recommended prettier format rules
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "react/prop-types": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
