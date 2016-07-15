module.exports = function(app) {

  var controller = app.controllers.categories;

  //RETRIEVE AND POST
  app.route('/api/v1/categories')
    .get(controller.getCategories);

}
