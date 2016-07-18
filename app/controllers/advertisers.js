module.exports = function(app){

  var controller = {}
    , advertisersModel = app.models.advertisers;

  // GET
  controller.getAdvertisers = function(req, res) {
    res.json(advertisersModel);
  };

  // GET ID
  controller.getAdvertisersId = function(req, res){

    var _id = req.params.id;

    advertiser = [];

    advertiser.push(advertisersModel[_id]);

    res.json(advertiser);

  };

  return controller;
};
