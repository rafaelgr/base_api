const Express = require('express');
const Cors = require('cors');
const Dotenv = require('dotenv');
const Pack = require('./package.json');
const Morgan = require('morgan');
const Winston = require('./winston');

Dotenv.config();

const app = Express();

app.use(Morgan('combined', { stream: Winston.stream }));
app.use(Cors());

app.use('/version', require('./api/version/version_controller'));

const server = app.listen(process.env.BASE_PORT, () => {
    console.log(Pack.name + " VRS: " + Pack.version);
    console.log("Listening on port " + server.address().port + "...");
});

module.exports = server;