var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var  port = process.env.PORT || 8800

var app = express();

require('./expressConfig')(app);

require('./routes')(app);

app.listen(port);
console.log('Listening on port ' + port + '...');