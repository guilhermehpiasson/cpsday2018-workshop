import * as express from 'express';
import * as bodyParser from 'body-parser';
import  TestRouter  from './routes/test/TestRouter';
import HotProductRouter from './routes/HotProductRouter';

var logger = require('./log');

class App {

  public express: express.Application;

  constructor() {

    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {

    this.express.use(bodyParser.json({ type: 'application/json' }));
    this.express.use(bodyParser.text());
    this.express.use(bodyParser.urlencoded({ extended: true }));

    this.express.set('view engine', 'ejs');
    
    this.express.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
      next();
    });
  }

  private routes(): void {
    
    this.express.use('/v1.0.0/hotProduct', HotProductRouter);
    this.express.use('/v1.0.0/hotProduct/test', TestRouter);
  }
}
export default new App().express;
