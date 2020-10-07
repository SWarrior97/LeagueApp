const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
var ip = require("ip")

//load config
dotenv.config({path:'./config/config.env'})

const app = express()

//logging
if(process.env.NODE_ENV === 'development'){
	app.use(morgan('dev'));
}

//Routes
app.use('/',require('./routes/index'))

const PORT = process.env.PORT || 3000
const HOSTNAME = ip.address();

if(process.env.NODE_ENV == "development"){
    app.listen(PORT,console.log(`Server on port ${PORT} on localhost`))
}else{
    app.listen(PORT,HOSTNAME,console.log(`Server on port ${PORT} Hostname ${HOSTNAME}`))
}
