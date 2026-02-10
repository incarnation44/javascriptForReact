module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  extends: ["eslint:recommended"],
  rules: {
    "no-unused-vars": "off",
    "react/prop-types": "off",
  },
};
