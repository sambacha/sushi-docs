'use strict';

module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  printWidth: 100,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  quoteProps: 'as-needed',
  proseWrap: 'never',
  semi: true,
  overrides: [
    {
      files: '*.md',
      options: {
        parser: "markdown",
        printWidth: 100,
        tabWidth: 2,
        useTabs: true,
        singleQuote: false,
        bracketSpacing: true,
      },
    },
  ],
};
