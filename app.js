const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const mongoose = require ('mongoose');
const database = require ('./server/config/database');
const routes = require ('./server/routes/user');
var passport = require('passport');
var flash    = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)

app.set('views', __dirname);
app.set('view engine', 'html');

mongoose.connect(database.uri);

mongoose.connection.on('connected',()=>{
	console.log("connected to database "+database.db);
});
mongoose.connection.on('err', ()=>{
	console.log("Failed in connecting to database "+database.db);
});

app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());

app.use('/',routes);
app.listen(port,()=>{
	console.log("server started at port "+port);
})