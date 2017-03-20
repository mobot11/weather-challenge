module.exports = {
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: 'google',
    rules: {
    	"object-curly-spacing": [2, "always"],
    	"require-jsdoc": [2, {
        "require": {
            "FunctionDeclaration": false,
            "MethodDefinition": false,
            "ClassDeclaration": false
        }
    }]
    }
};
