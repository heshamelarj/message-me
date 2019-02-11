const express = require('express');
const passport = require('passport');
const LoginController = require('./api/controllers/LoginController');
const RegisterController = require('./api/controllers/RegisterController');
const app_port = process.env.PORT || 5000;
const body_parser = require('body-parser');
const app = express();
const db = require('./config/db');
app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());

//initialise passport middleware
app.use(passport.initialize());
//passport config
require('./config/passport')(passport);
// app routes 
// app.use('/api/users',login_router);
app.use('/api/users', RegisterController);
app.use('/api/users', LoginController);

app.listen(app_port,() => console.log('app listening on port '+app_port));





