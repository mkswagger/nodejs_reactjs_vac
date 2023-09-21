const express = require('express')
const { globalRouter } = require('./routes/global.routes')
const app = express()
app.use(express.json());//instance of express framework
//const {connection} = require('./db/db_config');
const port = 3001 //common nomenclature is followed in whole one liek app.get and stuff
//TCP TP , Ip address is 127.0.0.1 
app.use("/",globalRouter);
app.listen(port, () => {
  console.log(`Moi app listening on port ${port}`)
});

