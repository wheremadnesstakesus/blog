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
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    camelcase: [
      'error',
      {
        properties: 'always',
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'consistent-return': [
      'error',
      {
        treatUndefinedAsUnspecified: false,
      },
    ],
    curly: 'error',
    'max-depth': ['error', 4],
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'max-lines': [
      'error',
      {
        max: 300,
        skipBlankLines: false,
        skipComments: false,
      },
    ],
    'max-params': ['error', 7],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-else-return': 'error',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc',
          'accumulator',
          'e',
          'ctx',
          'req',
          'request',
          'res',
          'response',
          '$scope',
          'staticContext',
        ],
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: ['builtin', 'external', 'parent', 'internal', 'sibling', 'index'],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'import/newline-after-import': ['error'],
    'import/no-unresolved': ['error', { ignore: ['^components', '^hooks'] }],
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
    'import/internal-regex': '^(components|hooks)',
    react: {
      version: 'detect',
    },
  },
}
