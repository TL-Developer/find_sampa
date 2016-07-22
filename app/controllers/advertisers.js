module.exports = function(app) {

  var controller = {}
    , advertisersModel = app.models.advertisers;

  controller.getAdvertisers = function(req, res) {

    res.json(advertisersModel);

  };

  return controller;

};
