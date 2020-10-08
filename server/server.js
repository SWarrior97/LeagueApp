const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
var ip = require("ip");
const path = require('path')


//load config
dotenv.config({path:'./config/config.env'})

const app = express();

//logging
if(process.env.NODE_ENV === 'development'){
	app.use(morgan('dev'));
}

//Static folder
app.use(express.static(path.join(__dirname,'public')))

//Routes
app.use('/',require('./routes/index'));
app.use('/tft',require('./routes/tft'));

const PORT = process.env.PORT || 3000
const HOSTNAME = ip.address();

if(process.env.NODE_ENV == "development"){
    app.listen(PORT,console.log(`Server on port ${PORT} on localhost`));
}else{
    app.listen(PORT,HOSTNAME,console.log(`Server on port ${PORT} Hostname ${HOSTNAME}`));
}
