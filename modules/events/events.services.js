const {connection} = require("../../db/db_config");//maintaining consistency keliye curly braces


const createEventService = (
    event_name,
    from_date,
    to_date,
    is_active,
    callback
)=>{
    connection.query(`INSERT INTO events VALUES ( NULL,"${event_name}","${from_date}","${to_date}","${is_active}",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP)`,
    (err,result)=>{
        if(err){
            console.log(err)
            callback(err,null);
        }
        else{
            callback(null,result);//no error but result 
        }
    }
    );
    
};

module.exports={createEventService};//exporting the module 