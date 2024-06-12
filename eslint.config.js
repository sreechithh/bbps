const nodePlugin = require('eslint-plugin-node');

module.exports = [
    {
        files: ["**/*.js"],
        ignores: ["node_modules/", "dist/"],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: "module",
        },
        plugins: {
            node: nodePlugin,
        },
        rules: {
            // Indentation rules
            'indent': ['error', 4], // Enforce 2 spaces indentation

            // Curly braces rules
            'curly': ['error', 'all'], // Enforce braces for all control statements

            // Space rules
            'space-before-blocks': ['error', 'always'], // Require or disallow a space before blocks
            'space-infix-ops': 'error', // Require spacing around infix operators
            'space-before-function-paren': ['error', 'never'], // Disallow space before function parentheses
            'keyword-spacing': ['error', {before: true, after: true}], // Require spacing around keywords

            // Loop indentation rules
            'brace-style': ['error', '1tbs', {'allowSingleLine': true}], // Enforce consistent brace style for loops
            'no-multi-spaces': 'error', // Disallow multiple spaces in a row

            // Comma spacing rule
            'comma-spacing': ['error', {'before': false, 'after': true}], // Ensure a space after commas

            // Linebreak before loops and conditional blocks
            'padding-line-between-statements': [
                'error',
                {blankLine: 'always', prev: '*', next: 'if'},
                {blankLine: 'always', prev: '*', next: 'for'},
                {blankLine: 'always', prev: '*', next: 'while'},
                {blankLine: 'always', prev: '*', next: 'do'},
                {blankLine: 'always', prev: '*', next: 'switch'},
                {blankLine: 'always', prev: '*', next: 'try'},
                {blankLine: 'always', prev: '*', next: 'function'},
            ],

            // Additional rules for loops
            'no-extra-semi': 'error', // Disallow unnecessary semicolons
            'no-unreachable-loop': 'error', // Disallow loops with a body that allows for loop exit
            'no-constant-condition': 'error', // Disallow constant conditions in loop conditions


            "no-whitespace-before-property": "error",
            "space-in-parens": ["error", "never"],
            "object-curly-spacing": ["error", "never"],
            "array-bracket-spacing": ["error", "never"]
        },
    },
];