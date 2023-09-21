const mysql = require("mysql2");
const connection = mysql.createConnection({
    host:"",//localhost h 
    user:"",
    password:"",
    port:"",
    database:"",
});

connection.connect((err)=>{
    if(err){
        console.log("Error connecting to DB");
    }else{
        console.log('Connected to DB');
    }

});

module.exports={connection};
