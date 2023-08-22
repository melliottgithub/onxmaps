module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['vite.config.ts', 'dist', '.eslintrc.cjs', 'jest.config.cjs', 'postcss.config.cjs', 'tailwind.config.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  parserOptions: {
    ecmaFeatures: {
      "tsx": true
    },
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: ".",
    project: [
      "./tsconfig.json"
    ]
  },
}
