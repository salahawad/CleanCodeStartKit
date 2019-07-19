// eslint-disable-next-line no-undef
_ = require('lodash');
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

require('./config/config.js');
const expressValidator = require('express-validator');
const cors = require('cors');


const Logger = require('./utils/logger');

const port = process.env.PORT || '3000';

app.use(cors());
app.use(Logger.restlogger);

app.use('/', express.static(path.join(__dirname, '')));
app.use(express.static(__dirname + '/public'));

app
    .use(
        bodyParser.urlencoded({
          extended: true,
        })
    )
    .use(bodyParser.json());

app.use(cookieParser());
app.use(expressValidator());

app.use(helmet());
app.use(helmet.noCache());
app.use(helmet.frameguard());

mongoose.Promise = global.Promise;

if (process.env.NODE_ENV === 'development') {
  mongoose.set('debug', true);
}

app.use('/', require('./routes/middleware.js'));

app.listen(port, () => {
  Logger.logDebug('new server  created on port ' + port);
});

module.exports = app;
