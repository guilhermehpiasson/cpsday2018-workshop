import {Router, Request, Response, NextFunction} from 'express';

var logger = require('../../log');

var swagger = require('../../config/swagger');

export class TestRouter {
  router: Router

  constructor() {
    this.router = Router();
    this.init();
  }

  public test(req: Request, res: Response, next: NextFunction) {
    try{

        logger.warn("Test - OK");
        res.status(200).json("OK");
    }catch(error){
        logger.error("TestRouter: - " + error);
        res.status(500).json("Error");
    }
  }

  public swagger(req: Request, res: Response, next: NextFunction) {
    try{

        res.status(200).json(swagger.default);
    }catch(error){
        logger.error("swagger: - " + error);
        res.status(500).json("Error");
    }
  }
  

  init() {
    this.router.get('/status', this.test);
    this.router.get('/swagger', this.swagger);
  }
}

const testRouter = new TestRouter();
testRouter.init();

export default testRouter.router;