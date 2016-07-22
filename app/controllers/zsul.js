module.exports = function(app){

  var controller = {}
    , zsulModel = app.models.zsul;

  controller.getAdvertisers = function(req, res) {

    setTimeout(function(){
      res.json(zsulModel);
    },1000);

  };

  controller.getAdvertisersId = function(req, res) {

    var _id        = req.params.id
      , _categorie = req.params.categorie;

    advertiser = [];

    advertiser.push(zsulModel[0][_categorie][_id]);

    res.json(advertiser);

  };

  return controller;

};
