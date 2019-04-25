module.exports = {
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec).ts?(x)'],
  testPathIgnorePatterns: ['node_modules', 'cypress'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
  },
  globals: {
    __PATH_PREFIX__: '',
    ___loader: { enqueue: () => {} },
  },
  verbose: true,
  notify: true,
};
