const mysql = require("mysql2");
const connection = mysql.createConnection({
    host:"127.0.0.1",//localhost h 
    user:"root",
    password:"root",
    port:"3306",
    database:"srmws",
});

connection.connect((err)=>{
    if(err){
        console.log("Error connecting to DB");
    }else{
        console.log('Connected to DB');
    }

});

module.exports={connection};