module.exports = function(app){

  var controller = app.controllers.zleste;

  app.route('/api/v1/zleste/anunciantes')
    .get(controller.getAdvertisers);

  app.route('/api/v1/zleste/anunciantes/:categorie/:id')
    .get(controller.getAdvertisersId);

};
