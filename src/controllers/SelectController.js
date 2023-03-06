
'use strict';

const oracledb = require('oracledb');
const dbConfig = require('../database/dbconfig');
const create = require('../database/create');
const insert = require('../database/insert');

// oracledb.fetchArraySize = 100;  // default value is 100
// oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

module.exports = {
  
  async  select(req, res) {

  let connection;

  try {
    // Get a non-pooled connection

    connection = await oracledb.getConnection(dbConfig);

    //await create.createTable(connection);  // create the demo table    
    //await insert.insertTable(); 
  
    // The statement to execute
    const sql =  ` SELECT
    F.ID ,
    F.NOME ,
    F.CPF ,
    F.DATAADMISSAO,
    F.ULTILIZAVT ,
    F.DATACADASTRO ,
    F.DATAALTERACAO,
    F.DATAEXCLUSAO ,
    C.NOME AS FUNCAO
  FROM
    FUNCIONARIO F,
    CARGO C
  WHERE
    C.id = F.CARGOID` 

    let result;

    // Default Array Output Format
    result = await connection.execute(sql);
    //console.log("----- Banana Farmers (default ARRAY output format) --------");
    //console.log(result.rows);

    // Optional Object Output Format
    result = await connection.execute(
      sql,
      {}, // A bind parameter is needed to disambiguate the following options parameter and avoid ORA-01036
      { outFormat: oracledb.OUT_FORMAT_OBJECT }); // outFormat can be OBJECT or ARRAY.  The default is ARRAY
   
      //console.log("----- Banana Farmers (default OBJECT output format) --------");
    //console.log(result.rows);
   
    return res.json(result.rows)
      
  } catch (err) {
    console.error(err);
  } finally { 
    if (connection) {
      try {
        // Connections should always be released when not needed
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

}

