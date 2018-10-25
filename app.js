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
    Winston.info(Pack.name + " VRS: " + Pack.version);
    Winston.info("Listening on port " + server.address().port + "...");
    Winston.error("This is an error");
});

module.exports = server;