module.exports = {
  extends: ["@nuxtjs/eslint-config-typescript"],
  rules: {
    quotes: "off",
    "@typescript-eslint/quotes": ["error"],
    semi: "off",
    "@typescript-eslint/semi": ["error"],
    "comma-dangle": ["error", "only-multiline"],
    "vue/attribute-hyphenation": ["error", "never", {
      ignore: ["reverse-transition", "hide-delimiters", "show-arrows", "hide-delimiter-background"]
    }],
    "vue/html-self-closing": ["error", {
      html: { normal: "never", void: "never" }
    }],
    "space-before-function-paren": ["error", "never"],
  },
};
