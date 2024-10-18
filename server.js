const HTTP = require('http');

const PORT = 3000;

const SERVER = HTTP.createServer((request, response) => {
    response.end("Hello world !");
});

SERVER.listen(PORT, () => {
    console.log("Serveur en cours d'exécution sur le port : " + PORT);
});
