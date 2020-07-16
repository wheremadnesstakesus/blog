module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:unicorn/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:promise/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['import', 'promise', 'react', 'prettier', 'react-hooks', 'jsx-a11y'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: ['builtin', 'external', 'parent', 'internal', 'sibling', 'index'],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'import/newline-after-import': ['error'],
    'import/no-unresolved': ['error', { ignore: ['^components', '^hooks', 'theme'] }],
    'prettier/prettier': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-fragments': ['error', 'element'],
    'react/jsx-handler-names': [
      'error',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    'react/jsx-sort-props': [
      'off',
      {
        ignoreCase: true,
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    'unicorn/filename-case': 'off',
  },
  settings: {
    'import/internal-regex': '^(components|hooks|theme)',
    react: {
      version: 'detect',
    },
  },
}
