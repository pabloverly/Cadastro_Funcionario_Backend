const insert = require('../database/insert');
const oracledb = require('oracledb');
const dbConfig = require('../database/dbconfig');


module.exports = {
  
  async  Delete(req, res) {

 
    const {id} = req.body;
    
   
    let connection1;
  
    try {
      connection1 = await oracledb.getConnection(dbConfig);
      console.log(id)
  
      let result;    
  
      date = new Date();
      result = await connection1.execute(        
        `delete funcionario where id =  :id`,
        [id], // Bind values
        { autoCommit: true}  
      );
     

    
      console.log("Rows inserted: " + result.rowsAffected);  // 1
      
      
  
    } catch (err) {
      console.error(err);
    } finally {
      try {
        if (connection1)  
          await connection1.close();   
      } catch (err) {
        console.error(err);
      }
    }
     return res.json({id})   
    }  
  
} 

