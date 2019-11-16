var myArgs = process.argv.slice(2);
console.log('Database: '+  myArgs[0] + '\nCollection: ' + myArgs[0] + '\nFicheiro a importar: ' + myArgs[0]);

var exec = require('child_process').exec, child;

child = exec('mongoimport --db ' + myArgs[0] + ' --collection ' + myArgs[1] + ' --file ' + myArgs[2] + ' --jsonArray',
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });
