module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2023,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.eslint.json',
    },
    parser: '@typescript-eslint/parser',
    settings: {
        react: {
            version: 'detect', // Preact specific configuration
            pragma: 'h', // Pragma to use, default to "React"
            fragment: 'Fragment', // Fragment to use, default to "React.Fragment"
        },
    },
    env: {
        browser: true,
        amd: true,
        node: true,
    },
    extends: [
        'airbnb', // or airbnb/hooks if you use hooks
        'airbnb-typescript',
        'next',
        'plugin:prettier/recommended', // Make sure this is always the last element in the array.
    ],
    plugins: ['simple-import-sort', 'prettier'],
    rules: {
        "jsx-a11y/no-static-element-interactions": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-expressions": "off",
        "prettier/prettier": ["error", {}, { usePrettierrc: true }],
        "react/require-default-props": "off",
        "react/no-unescaped-entities": 0,
        "react/no-array-index-key": "off",
        "import/extensions": "off",
        "class-methods-use-this": "off",
        "jsx-a11y/control-has-associated-label": "off",
        "jsx-a11y/interactive-supports-focus": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/label-has-associated-control": [
            "error",
            {
                required: {
                    some: ["nesting", "id"],
                },
            },
        ],
        "jsx-a11y/label-has-for": [
            "error",
            {
                required: {
                    some: ["nesting", "id"],
                },
            },
        ],
        'react/react-in-jsx-scope': 'off',
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": [
            "warn",
            {
                ignoreTypeValueShadow: true,
                ignoreFunctionTypeParameterNameValueShadow: true,
            },
        ],
        "import/no-extraneous-dependencies": "off",
        "no-console": "off",
        "import/prefer-default-export": "off",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "jsx-a11y/anchor-is-valid": [
            "error",
            {
                components: ["Link"],
                specialLink: ["hrefLeft", "hrefRight"],
                aspects: ["invalidHref", "preferButton"],
            },
        ],
        "react/no-danger": "off",
        "react/function-component-definition": [
            2,
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ],
    },
};
