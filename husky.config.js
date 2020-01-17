module.exports = {
  hooks: {
    precommit: 'npm run lint',
    'commit-msg': 'npm run commitlint',
  },
};
