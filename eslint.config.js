import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import pluginJs from '@eslint/js';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { ignores: ['coverage'] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-irregular-whitespace': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // ⁠ react ⁠ first, then packages starting with a character
            ['^react$', '^[a-z]'],
            // Packages starting with ⁠ @ ⁠
            ['^@'],
            // Imports starting with ⁠ ../ ⁠
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Imports starting with ⁠ ./ ⁠
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ],
        },
      ],
    },
  },
];
