import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import typescriptEslintParser from '@typescript-eslint/parser';

export default defineConfig([
  ...tseslint.config(eslint.configs.recommended, tseslint.configs.recommended),
  {
    ignores: ['node_modules/', 'dist/'],
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        // Add any other specific global variables if needed, e.g.,
        // process: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      'no-underscore-dangle': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      'no-empty-pattern': 'off',
      'no-useless-constructor': ['warn'],
      'no-plusplus': ['error'],
      'prefer-template': ['error'],
      'jsx-quotes': ['error', 'prefer-single'],
      'prefer-const': [
        'error',
        {
          destructuring: 'any',
          ignoreReadBeforeAssign: false,
        },
      ],
      'lines-between-class-members': [
        'error',
        'always',
        {
          exceptAfterSingleLine: true,
        },
      ],
    },
  },
]);
