module.exports = function(app){

  var controller = app.controllers.zsul;

  app.route('/api/v1/zsul/anunciantes')
    .get(controller.getAdvertisers);

  app.route('/api/v1/zsul/anunciantes/:categorie/:id')
    .get(controller.getAdvertisersId);

};
