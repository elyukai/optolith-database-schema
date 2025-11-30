import js from "@eslint/js"
import { defineConfig, globalIgnores } from "eslint/config"
import globals from "globals"
import tseslint from "typescript-eslint"

export default defineConfig([
  globalIgnores([
    "**/gen/",
    "**/lib/",
    "src/{cache,config,helpers,rendering}/**/*",
    "tsondb.config.{js,mjs,cjs,ts,mts,cts}",
  ]),
  {
    files: [
      "src/**/*.{js,mjs,cjs,ts,mts,cts}"
    ],
    plugins: {
      js,
    },
    extends: ["js/recommended"],
  },
  {
    files: [
      "src/**/*.{js,mjs,cjs,ts,mts,cts}"
    ],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    ignores: [
      "eslint.config.js",
    ],
    extends: tseslint.configs.strictTypeChecked,
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-empty-object-type": [
        "error",
        {
          allowInterfaces: "with-single-extends",
        },
      ],
      "@typescript-eslint/no-namespace": [
        "error",
        {
          allowDeclarations: true,
        },
      ],
      "@typescript-eslint/prefer-promise-reject-errors": [
        "error",
        {
          allowThrowingUnknown: true,
        }
      ],
      "@typescript-eslint/no-base-to-string": "off",
      "@typescript-eslint/no-array-constructor": "off",
    },
  },
  // {
  //   files: ["test/**/*.{js,mjs,cjs,ts,mts,cts}"],
  //   rules: {
  //     "@typescript-eslint/no-floating-promises": "off",
  //   }
  // },
])
