module.exports = {
  hooks: {
    precommit: 'npm run lint',
    prepush: 'npm run test',
  },
};
