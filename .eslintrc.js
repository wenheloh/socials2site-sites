module.exports = {
  extends: ["@nuxtjs/eslint-config-typescript"],
  rules: {
    quotes: "off",
    "@typescript-eslint/quotes": ["error"],
    semi: "off",
    "@typescript-eslint/semi": ["error"],
    "comma-dangle": ["error", "only-multiline"],
  },
};
