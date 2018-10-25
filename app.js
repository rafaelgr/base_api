const Express = require('express');
const app = Express();

app.get('/', (req, res) => {
    res.status(200).send(' / Get');
});

const server = app.listen(30000, () => {
    console.log("Listening on port " + server.address().port + "...");
});

module.exports = server;