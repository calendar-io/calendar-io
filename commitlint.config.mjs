const config = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
  extends: ['@commitlint/config-conventional'],
  /*
   * Any rules defined here will override rules from @commitlint/config-conventional
   */
  rules: {
    'type-enum': [
      2,
      'always',
      [
        "ci",
        "chore",
        "docs",
        "ticket",
        "feat",
        "fix",
        "refactor",
        "revert",
        "style"
      ]
    ],
    'type-case': [
      2,
      'always',
      [
        'lower-case'
      ]
    ]
  },
  /*
   * Custom URL to show upon failure
   */
  helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
};

export default config;