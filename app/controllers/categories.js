module.exports = function(app){

  var controller = {}
    , categoriesModel = app.models.categories;

  controller.getCategories = function(req, res){

    res.json(categoriesModel);

  };

  return controller;
};
