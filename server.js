var http   = require('http')
  , config = require('config')
	, app    = require('./config/express')();

if(process.env.NODE_ENV == 'production'){
  require('./config/database.js')('mongodb://tiago:admin@ds035766.mlab.com:35766/find-sampa');
}else{
  require('./config/database.js')('mongodb://localhost/find-sampa');
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Sistema rodando na porta ' + app.get('port'));
});
