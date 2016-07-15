module.exports = function(app){

  var controller = {}
    , advertisersModel = app.models.advertisers;

  // GET
  controller.getAdvertisers = function(req, res) {
    res.json(advertisersModel);
  };

  return controller;
};
