module.exports = function(app) {

  var controller = app.controllers.advertisers;

  app.route('/api/v1/anunciantes')
    .get(controller.getAdvertisers);
};
