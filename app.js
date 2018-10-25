const Express = require('express');
const Cors = require('cors');
const Dotenv = require('dotenv');

Dotenv.config();

const app = Express();
app.use(Cors());

app.get('/', (req, res) => {
    res.status(200).send(' / Get');
});

const server = app.listen(process.env.BASE_PORT, () => {
    console.log("Listening on port " + server.address().port + "...");
});

module.exports = server;