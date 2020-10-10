module.exports = {
  extends: ["@nuxtjs/eslint-config-typescript"],
  rules: {
    quotes: "off",
    "@typescript-eslint/quotes": ["error"],
    semi: "off",
    "@typescript-eslint/semi": ["error"],
    "comma-dangle": ["error", "only-multiline"],
    "vue/attribute-hyphenation": ["error", "never"],
    "vue/html-self-closing": ["error", {
      html: { normal: "never", void: "always" }
    }]
  },
};
