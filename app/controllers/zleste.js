module.exports = function(app){

  var controller = {}
    , zlesteModel = app.models.zleste;

  controller.getAdvertisers = function(req, res) {
    zlesteModel.find().exec().then(function(advertisers) {
      res.json(advertisers);
    }, function(err){
      res.status(500).json(erro);
      console.log('Não foi possível listar os advertisers');
    });
  };

  controller.getAdvertisersId = function(req, res) {

    var _id        = req.params.id
      , _categorie = req.params.categorie;

    zlesteModel.findById(_id).exec().then(function(advertiser) {
      res.json(advertiser);
    });
  };

  controller.createAdvertiser = function(req, res){

    var advertiser = req.body;

    zlesteModel.create(req.body).then(function(done){
      console.log(done);
      console.log('Anunciante cadastrado com sucesso');
    },
    function(err){
      console.log(err);
      console.log('Não foi possível cadastrar o anunciante');
    });

  };

  return controller;

};
