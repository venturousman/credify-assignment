// import modules
const express = require('express');
const bodyParser = require('body-parser');
const swagger = require('swagger-ui-express');

const routes = require('./api/routes');
const apiDocument = require('../docs/docs.json');   // import files

// configuration, can be moved to the config file.
const port = process.env.PORT || 3000;

const app = express();  // create a new app

// === configure middleware modules
app.use('/api-docs', swagger.serve, swagger.setup(apiDocument));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// === configure routes, should be configured after bodyParser configuration 
routes(app);

// catch all routes
app.all('*', (req, res) => {
    res.status(404).send({ msg: '404! You are going to the wrong way. Please go back!' });
});

// === configure database
const db = require('../src/models');
db.mongoose.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })
const connection = db.mongoose.connection
connection.on('error', (error) => console.error(error))
connection.once('open', () => console.log('connected to database'))

// === listen at the port
app.listen(port, function () {
    console.log('Server started on port: ' + port);
});