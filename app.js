var express = require('express')
    , config = require('./config')
    , logger = require('morgan')
    , router = express.Router();
    ;

var app = express();
var port = config[app.get('env')].port

app.use(logger('dev'));

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


app.set('views', __dirname + '/app');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/app'));

router.get('/', function(req, res) {
    res.render('../app/index', {state:'/',title: 'Lottery App' });
});

app.get('/partials/*', function (req, res) {
    res.render('../app/' + req.params[0]);
});

app.listen(port, function () {
    console.log('listening on http://localhost:%s', port);
})
