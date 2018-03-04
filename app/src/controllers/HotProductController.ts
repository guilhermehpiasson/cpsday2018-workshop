
var logger = require('../log');

var db = require('../config/dbConfig');

exports.listHotProducts = function(req, res) {
  try{

    logger.info("1 - listHotProducts - REQUEST : {" +req.params.productId+ "}");

    db.find({}).sort({title: 1}).exec(function(err, doc) {
      if (err) return logger.error(err);
      res.status(200).json(doc);
    });
  }catch(error){
    logger.error('listHotProducts - General error: ' + error);
    res.status(500).json(error);
  }
};

exports.searchHotProduct = function(req, res) {
  try{

    logger.info("1 - searchHotProduct - REQUEST : {" +req.params.productId+ "}");

    db.findOne({_id: req.params.productId }, function(err, doc) {
      if (err) return logger.error(err);
      if(doc) return res.status(200).json(doc);
      res.status(404).end();
    });
  }catch(error){
    logger.error('searchHotProduct - General error: ' + error);
    res.status(500).json(error);
  }
};

exports.createHotProduct = function(req, res) {
  try{

    var product = req.body;

    logger.info("1 - createHotProduct - REQUEST : {" +JSON.stringify(product)+ "}");

    db.insert(product, function(err, newDoc) {
        if(err) return logger.error(err);
        logger.info('Added with success: ' + JSON.stringify(newDoc));
        res.status(200).json(newDoc);
    });
  }catch(error){
    logger.error('createHotProduct - General error: ' + error);
    res.status(500).json(error);
  }
}; 

exports.updateHotProduct = function(req, res) {
  try{

    var product = req.body;

    logger.info("1 - updateHotProduct - REQUEST : {" +JSON.stringify(product)+ "}");

    db.update({_id : req.params.productId }, product, function(err, numReplaced) {
      if (err) return logger.error(err);
      if(numReplaced){
        logger.info('Updated with success: ' + req.params.productId);
        res.status(200).end();
      }else{
        res.status(400).end();
      }
    });
  }catch(error){
    logger.error('updateHotProduct - General error: ' + error);
    res.status(500).json(error);
  }
};

exports.deleteHotProduct = function(req, res) {
  try{


    logger.info("1 - deleteHotProduct - REQUEST : {" +JSON.stringify(req.params.productId)+ "}");

    db.remove({ _id: req.params.productId }, {}, function (err, numRemoved) {
      if (err) return logger.error(err);
      if(numRemoved){
        logger.info('Removed with success: ' + req.params.productId);
        res.status(200).end();
      }else{
        res.status(400).end();
      }
    });
  }catch(error){
    logger.error('deleteHotProduct - General error: ' + error);
    res.status(500).json(error);
  }
};

