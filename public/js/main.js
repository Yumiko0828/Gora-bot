const fs = require('fs');

const dir = './commands'

fs.readdir(dir, (err, files) => {
    console.log('Total commands:', files.length);
    document.getElementById('cmd1').innerHTML=`${files.length}`;
});