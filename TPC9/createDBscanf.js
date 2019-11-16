var scanf = require('scanf');
 
console.log('Nome para a Base de Dados:');
var db = scanf('%s');
 
console.log('Nome para a Collection: ');
var col = scanf('%s');

console.log('Ficheiro a importar: ');
var file = scanf('%s');
 
console.log('Database: '+  db + '\nCollection: ' + col + '\nFicheiro a importar: ' + file);


var exec = require('child_process').exec, child;
child = exec('mongoimport --db ' + db + ' --collection ' + col + ' --file ' + file + ' --jsonArray',
function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
         console.log('exec error: ' + error);
    }
});
