module.exports = function(app){



  app.route('/search')
    .post(function(req, res) {

      var regiao = req.body.regiao
        , query  = req.body.query;


      var sendJson = app.models[regiao];

      console.log(sendJson);

      if(sendJson[0][query]){
        setTimeout(function(){
          res.json(sendJson[0][query]);
        }, 1000);
      }else {
        res.status(404).json('erro');
      }

    });

};
