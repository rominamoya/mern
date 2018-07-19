// ./express-server/app.js
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import bb from 'express-busboy';
import SourceMapSupport from 'source-map-support';
import contactsRoutes from './routes/contacts.server.route';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

bb.extend(app);

const port = process.env.PORT || 3001;

mongoose.Promise = global.Promise;

const mongoDB = 'mongodb://admin:Rm030216@ds251179.mlab.com:51179/dbcontacs?replicaSet=rs-ds251179';

mongoose.connect(mongoDB, {});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

SourceMapSupport.install();
app.use('/api', contactsRoutes);
app.get('/', (req, res) => res.end('Api working'));
app.use((req, res) => {
  res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});
app.listen(port, () => {
  console.log(`App Server Listening at ${port}`);
});
