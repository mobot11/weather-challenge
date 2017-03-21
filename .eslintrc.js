module.exports = {
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: ['google', "plugin:react/recommended"],
    rules: {
    	"object-curly-spacing": [2, "always"],
        "arrow-parens": [2, "as-needed"],
    	"require-jsdoc": [2, {
        "require": {
            "FunctionDeclaration": false,
            "MethodDefinition": false,
            "ClassDeclaration": false
        },
    }]
    }
};
