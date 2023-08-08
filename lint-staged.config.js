module.exports = {
  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': function (filenames) {
    return ['eslint --fix ' + filenames.join(' '), 'prettier --write ' + filenames.join(' ')];
  },
  // Format MarkDown and JSON
  '**/*.(md|json)': function (filenames) {
    return 'prettier --write ' + filenames.join(' ');
  },
};
