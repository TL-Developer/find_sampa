var supertest = require('supertest')
  , chai      = require('chai');

var app = require('../../config/express')();

var request = supertest(app);
var expect = chai.expect;


var default_advertisers = [
  {
    'zleste': [
      {

      }
    ]
  }
];

describe('Routes Advertisers', function(){

  describe('Route GET /api/v1/anunciantes', function(){

    it('should return a list of advertisers', function(done){

      request.get('/api/v1/anunciantes').end(function(err, res){

        // expect(res.body[0].id).to.be.eql(default_advertisers[0].id);
        console.log(res.body[0]);
        done(err);
      });

    });

  });

});
