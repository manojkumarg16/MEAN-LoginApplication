const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const mongoose = require ('mongoose');
const database = require ('./server/config/database');
const user = require ('./server/routes/user')
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(database.uri);

mongoose.connection.on('connected',()=>{
	console.log("connected to database "+database.db);
});
mongoose.connection.on('err', ()=>{
	console.log("Failed in connecting to database "+database.db);
});

app.use('/',user);
app.listen(port,()=>{
	console.log("server started at port "+port);
})