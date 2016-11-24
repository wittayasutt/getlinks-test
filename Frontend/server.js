var express = require('./config/express');
var app = express();
app.listen(3000);
module.export = app;

console.log('Server running');