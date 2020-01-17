module.exports = {
  hooks: {
    precommit: 'npm run lint',
    prepush: 'npm run test',
    'commit-msg': 'npm run commitlint',
  },
};
