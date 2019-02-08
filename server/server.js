const express = require('express');
const login_router = require('./api/routes/login');
const register_router = require('./api/routes/register');
const app_port = process.env.PORT || 5000;
const body_parser = require('body-parser');
const app = express();
const db = require('./config/db');
app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());
// app routes 
// app.use('/api/users',login_router);
app.use('/api/users', register_router);
app.use('/api/users', login_router);

app.listen(app_port,() => console.log('app listening on port '+app_port));





