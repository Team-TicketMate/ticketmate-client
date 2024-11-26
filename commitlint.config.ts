const config = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'design',
        'style',
        'refactor',
        'comment',
        'chore',
        'docs',
        'rename',
        'remove',
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'body-leading-blank': [2, 'always'],
    'subject-case': [0],
  },
};

export default config;
