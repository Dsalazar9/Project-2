// NPM Packages
var express = require('express');
var bodyParser = require('body-parser');
var passport = require('./helpers/passport');
var session = require('express-session');

// Config
var PORT = process.env.port || 8080;
var mode = process.env.NODE_ENV;
var app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(sessionStorage({secret:"helloworld", resave:true, saveUnitialized: true}))
app.use(passport.initialize());
app.use(passport.session());



// Routes
require('./routes/htmlRoutes')(app);
// require('./routes/apiRoutes')(app);

db.sequelize.sync().then(() => {
    app.listen(PORT, function () {
        if (mode !== 'production') {
            var opn = require('opn');
            opn(`http://localhost:${PORT}`, { app: ['google chrome'] })
        }
        console.log(`👋  Hey there I'm 👂 ing on Port: ${PORT}`);
    });
});