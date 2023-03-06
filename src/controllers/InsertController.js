const insert = require('../database/insert');
const oracledb = require('oracledb');
const dbConfig = require('../database/dbconfig');


module.exports = {
  
  async  Insert(req, res) {

 
    const { Nome,CPF,DataAdmissao, UltilizaVT, DataCadastro, DataAlteracao, DataExclusao } = req.body;
    
   
    let connection1;
  
    try {
      connection1 = await oracledb.getConnection(dbConfig);
     
  
      let result;    
  
      date = new Date();
      // Insert with autoCommit enabled
      result = await connection1.execute(        
      
        
        `INSERT INTO FUNCIONARIO (Id,Nome,CPF,DataAdmissao, UltilizaVT, DataCadastro, DataAlteracao, DataExclusao)
         VALUES (FUNCIONARIO_id.nextval , :Nome, :CPF,to_date(:DataAdmissao,'dd/mm/yyyy'), :UltilizaVT, to_date(:DataCadastro,'dd/mm/yyyy'), to_date(:DataAlteracao,'dd/mm/yyyy'), to_date(:DataExclusao,'dd/mm/yyyy') )`,
        [Nome,CPF,DataAdmissao, UltilizaVT, DataCadastro, DataAlteracao, DataExclusao ], // Bind values
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
     return res.json({Nome})   
    }  
} 

