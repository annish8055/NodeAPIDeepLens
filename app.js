var express = require('express');
var path = require('path');
var indexRouter = require('./routes/index');
var lensDataRouter = require('./routes/warningData');
var AWS = require("aws-sdk");

AWS.config.update({
     "accessKeyId": "AKIAJVUUZABOROUN7L2A", 
     "secretAccessKey": "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", 
         "region": "us-east-1" 
});


// const connect = require(config);

// connect.then((db) => {
//     console.log("Connected correctly to server");
//   },(err) => { console.log(err); });

  var app = express();

 
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');
  app.use('/', indexRouter);
  app.use('/lensData', lensDataRouter);

  // catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

  app.listen(3000, () => console.log('Example app listening on port 3000!'))
  
  module.exports = app;