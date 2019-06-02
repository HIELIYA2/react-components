module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: 'eslint:recommended',
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            tsx: true,
        },
        ecmaVersion: 2018,
    },
    plugins: ['react'],
    rules: {
        'no-unused-vars': 'off', // TODO remove
    },
};
