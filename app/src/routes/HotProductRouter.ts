import {Router, Request, Response, NextFunction} from 'express';

const hotProductController = require('../controllers/HotProductController');

var logger = require('../log');

export class HotProductRouter {
  router: Router

  constructor() {
    this.router = Router();
    this.init();
  }

  public listHotProducts(req: Request, res: Response, next: NextFunction) {
    try{
      hotProductController.listHotProducts(req, res);
    }catch(error){
      logger.error("listHotProducts: - " + error);
      res.status(500).json("Error"); 
    }
  }

  public searchHotProduct(req: Request, res: Response, next: NextFunction) {
    try{
      hotProductController.searchHotProduct(req, res);
    }catch(error){
      logger.error("searchHotProduct: - " + error);
      res.status(500).json("Error"); 
    }
  }

  public createHotProduct(req: Request, res: Response, next: NextFunction) {
    try{
      hotProductController.createHotProduct(req, res);
    }catch(error){
      logger.error("createHotProduct: - " + error);
      res.status(500).json("Error"); 
    }
  }

  public updateHotProduct(req: Request, res: Response, next: NextFunction) {
    try{
      hotProductController.updateHotProduct(req, res);
    }catch(error){
      logger.error("updateHotProduct: - " + error);
      res.status(500).json("Error"); 
    }
  }

  public deleteHotProduct(req: Request, res: Response, next: NextFunction) {
    try{
      hotProductController.deleteHotProduct(req, res);
    }catch(error){
      logger.error("deleteStore: - " + error);
      res.status(500).json("Error"); 
    }
  }

  init() {
    
    this.router.get('/', this.listHotProducts);
    this.router.get('/:productid', this.searchHotProduct);
    this.router.post('/', this.createHotProduct);
    this.router.put('/:storeId', this.updateHotProduct);
    this.router.delete('/:storeId', this.deleteHotProduct);
  }
  
}

const hotProductRouter = new HotProductRouter();
hotProductRouter.init();

export default hotProductRouter.router;
