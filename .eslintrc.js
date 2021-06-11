export default {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 11,
    sourceType: "module",
    project: "tsconfig.eslint.json"
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "prefer-const": "error",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    // This is being handled by tsc compiler
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-unused-params": "off",
  },
  overrides: [
    {
      files: ["tests/**/*.ts"],
      env: {
        jest: true,
        node: true,
      },
      plugins: ["jest"],
    },
  ],
};
