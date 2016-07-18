module.exports = function(app){
  var controller = app.controllers.advertisers;

  //RETRIEVE AND CREATE
  app.route('/api/v1/anunciantes')
    .get(controller.getAdvertisers);

  //UPDATE AND DELETE
  app.route('/api/v1/anunciantes/:id')
    .get(controller.getAdvertisersId);

};
