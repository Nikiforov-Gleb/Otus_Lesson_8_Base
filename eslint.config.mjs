import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import jest from 'eslint-plugin-jest';

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], 
    plugins: { js }, 
    rules:{
      ...js.configs.recommended.rules,
      "semi":["error","always"],
      "no-console": "error",
    },
    extends: ["js/recommended"], 
    languageOptions: { globals: globals.browser } },

  { files: ["Otus_lesson_10_base/**/*.test.js"],
    ...jest.configs['flat/recommended'], }

]);
