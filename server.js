var http   = require('http')
  , config = require('config')
	, app    = require('./config/express')();

http.createServer(app).listen(app.get('port'), function(){
  console.log('Sistema rodando na porta ' + app.get('port'));
});
