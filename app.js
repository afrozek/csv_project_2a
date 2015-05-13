/*--------DEPENDENCIES--------*/
/*--------DEPENDENCIES--------*/

var express = require('express');
var mongoose = require('mongoose');
var routes = require('./routes');
var graphs = require('./routes/graphs.js');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var multer  = require('multer');

var app = express();

//mongo variables
var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;
mongoose.connect('mongodb://localhost/test');




/*--------MULTER UPLOADER--------*/
/*--------MULTER UPLOADER--------*/

//UPLOAD STATUS
var done=false;

app.use(multer({ dest: './uploads',
 rename: function (fieldname, filename) {
    return "file";
  },
onFileUploadStart: function (file) {
  console.log(file.originalname + ' is starting ...');
  console.log("onFileUploadStart is " + done);
  
},
onFileUploadComplete: function (file) {
  console.log(file.fieldname + ' uploaded to  ' + file.path)
  done=true;
  console.log("onFileUploadComplete is " + done);

}
}));


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}







/*--------ROUTES--------*/
/*--------ROUTES--------*/
app.get('/', routes.index);
app.get('/users', user.list);

//graph routes
app.get('/enrollment',graphs.enrollment);
app.get('/gender',graphs.gender);
app.get('/tuition',graphs.tuition);


//enrollment homepage
app.post('/enrollment',graphs.enrollment);
//enrollment upload
app.post('/enrollment_display_graph',graphs.enrollment_display_graph);


//gender homepage
app.post('/gender',graphs.gender);
//gender upload
app.post('/gender_display_graph',graphs.gender_display_graph);



//tuition homepage
app.post('/tuition',graphs.tuition);
//tuition upload
app.post('/tuition_display_graph',graphs.tuition_display_graph);









/*--------SERVER--------*/
/*--------SERVER--------*/

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});














