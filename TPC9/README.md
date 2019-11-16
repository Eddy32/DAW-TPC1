# DAW-TPC9
Ambos os ficheiros criam uma base de dados em mongos apartir de um ficheiro json

## Utilização
* createDB.js
Basta correr o ficheiro passando como argumento o nome para a base de dados, collection e o ficheiro a importar, respetivamente. Podendo assim correr, por exemplo, 'node createDB.js filmes filmes movies.json'.

*teste.js
Este programa cria também uma base de dados, todavia utiliza scanf de modo a não ser necessário passar como argumento, na eventualidade de o utilizador não saber quais passar ou a sua ordem. Deste modo necessita da biblioteca scanf, sendo assim necessário executar 'npm install scanf' previamente. De seguida basta correr 'node createDBscanf.js'.
