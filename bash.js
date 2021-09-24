const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt >');
module.exports = process.stdin.on('data', data => {
  const cmd = data.toString().trim();

  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'ls') {
    ls();
  }

  if (cmd.slice(0, 3) === 'cat') {
    const fileName = cmd.slice(4);
    cat(fileName);
  }

  process.stdout.write('\nprompt > ');
});
