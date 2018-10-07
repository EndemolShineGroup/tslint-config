export default {
  rules: {
    /**
     * ES6
     */
    'no-var-keyword': true,
    'ter-arrow-body-style': [true, 'always'],
    'ter-arrow-parens': [true, 'always'],
    'ter-arrow-spacing': true,

    /**
     * Variables
     */
    'no-shadowed-variable': true,
    'no-use-before-declare': true,

    /**
     * Possible errors
     */
    ban: [true, ['alert']],
    'no-conditional-assignment': true,
    'no-console': true,
    'no-constant-condition': true,
    'no-debugger': true,
    'no-duplicate-case': true,
    'no-empty': true,
    'no-ex-assign': true,
    'no-extra-boolean-cast': true,
    'no-extra-semi': true,
    'no-inner-declarations': true,
    'no-invalid-regexp': true,
    'no-irregular-whitespace': true,
    'no-unnecessary-initializer': true,
    'ter-no-sparse-arrays': true,
    'trailing-comma': [true, { multiline: 'always' }],
    'use-isnan': true,

    /**
     * Best practices
     */
    curly: true,
    forin: true,
    'label-position': true,
    'new-parens': true,
    'no-arg': true,
    'no-construct': true,
    'no-duplicate-variable': [true, 'check-parameters'],
    'no-eval': true,
    'no-string-throw': true,
    'no-switch-case-fall-through': true,
    'no-unused-expression': true,
    radix: true,
    'switch-default': true,
    'ter-indent': [
      true,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'triple-equals': true,

    /**
     * Style
     */
    'brace-style': [
      true,
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    'comment-format': [true],
    eofline: true,
    'no-consecutive-blank-lines': [true, 2],
    'no-trailing-whitespace': true,
    'no-unnecessary-qualifier': true,
    'number-literal-format': true,
    'object-literal-key-quotes': [true, 'as-needed'],
    'object-literal-shorthand': true,
    'object-literal-sort-keys': true,
    'one-line': [true, 'check-catch', 'check-finally', 'check-else'],
    'one-variable-per-declaration': true,
    'ordered-imports': true,
    'prefer-method-signature': true,
    quotemark: [true, 'single', 'jsx-double'],
    semicolon: [true, 'always'],
    'variable-name': [
      true,
      'check-format',
      'allow-pascal-case',
      'ban-keywords',
    ],
  },
};
