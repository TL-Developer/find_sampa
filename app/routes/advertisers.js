module.exports = function(app){
  var controller = app.controllers.advertisers;

  //RETRIEVE AND CREATE
  app.route('/api/v1/advertisers')
    .get(controller.getAdvertisers);

  //UPDATE

  //DELETE

};
