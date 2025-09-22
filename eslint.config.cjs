const { defineConfig } = require("eslint/config");

const babelParser = require("@babel/eslint-parser");
const globals = require("globals");
const react = require("eslint-plugin-react");
const prettier = require("eslint-plugin-prettier");
const js = require("@eslint/js");

const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = defineConfig([
  {
    languageOptions: {
      parser: babelParser,
      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        requireConfigFile: false,

        babelOptions: {
          presets: ["@babel/preset-react"],
        },
      },

      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    ignores: ["node_modules", "dist", "build", ".next", "dist/assets/*.js"],

    plugins: {
      react,
      prettier,
    },

    extends: compat.extends(
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:prettier/recommended",
    ),

    rules: {
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": "error",
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
