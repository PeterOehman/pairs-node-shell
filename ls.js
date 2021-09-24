const fs = require('fs');

module.exports = function () {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write('\n' + files.join('\n'));
      process.stdout.write('\n' + 'prompt > ');
    }
  });
};
