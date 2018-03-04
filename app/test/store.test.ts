
import express from '../src/App';

var logger = require('../src/log');

var request = require('supertest')(express);
var assert = require('assert');

const testHotProductPayload = require('./payloads/testHotProductPayload');


describe('#HotProductController', function() {

    let idHotProduct;

    it('#Route 1 - /v1.0.0/hotProduct/test/status - Rota de teste da Aplicação',function(done) {
        request.get('/v1.0.0/hotProduct/test/status')
            .expect(200, done);
    });

    it('#Route 2 - CreateHotProduct - /v1.0.0/hotproduct/ - Criação de HotProduct', function(done) {
      this.timeout(20000);
      request.post('/v1.0.0/hotproduct/')
          .send(testHotProductPayload.default)
          .expect(200)
          .end(function (err, response) {
            idHotProduct = response.body._id
            assert.notEqual(response.body._id, null);
            done();
          });
    });

    it('#Route 3 - UpdateHotProduct - /v1.0.0/hotproduct/:idHotProduct - Alteração de Hot Product', function(done) {
      
      var requestToUpdateHotProduct = testHotProductPayload.default;
      requestToUpdateHotProduct.title = "Camiseta programador";

      this.timeout(20000);
      request.put('/v1.0.0/hotproduct/' + idHotProduct)
          .send(requestToUpdateHotProduct)
          .expect(200)
          .end(function (err, response) {
            done();
          });
    });

    it('#Route 4 - DeleteHotProduct - /v1.0.0/hotproduct/:idHotProduct - Exclusão de Hot Product', function(done) {
      this.timeout(20000);
      request.delete('/v1.0.0/hotproduct/' + idHotProduct)
          .expect(200)
          .end(function (err, response) {
            done();
          });
    });

});

