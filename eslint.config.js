import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import {defineConfig, globalIgnores} from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {jsx: true},
        sourceType: 'module'
      }
    },
    rules: {
      'react/prop-types': 'off',
      // 'react/prop-types': [0],
      'indent': ['off', 'space'],
      //??? 'indent': ['error', 'tab'],
      'comma-dangle': 'off',
      // 'comma-dangle': ['error', 'never'],
      
      'no-unused-vars': 'off', //???
      'react-refresh/only-export-components': [
        'warn',
        {allowConstantExport: true},
      ],
      'semi': ['off', 'always', {'omitLastInOneLineBlock': false}],
      // 'semi': ['error', 'always', {'omitLastInOneLineBlock': false}],
      'quotes': ['warn', 'single'],
    },
  },
]);
