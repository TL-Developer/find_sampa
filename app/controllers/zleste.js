module.exports = function(app){

  var controller = {}
    , zlesteModel = app.models.zleste;

  controller.getAdvertisers = function(req, res) {

    setTimeout(function(){
      res.json(zlesteModel);
    },1000);

  };

  controller.getAdvertisersId = function(req, res) {

    var _id        = req.params.id
      , _categorie = req.params.categorie;

    advertiser = [];

    advertiser.push(zlesteModel[0][_categorie][_id]);

    res.json(advertiser);

  };

  return controller;

};
