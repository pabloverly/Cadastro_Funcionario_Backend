const oracledb = require('oracledb');
const dbConfig = require('./dbconfig.js');

//oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

module.exports = {
async  deleteTable(id_usuario) {
//module.exports = {
//async  insertTable() { 

  let connection1;

  try {
    connection1 = await oracledb.getConnection(dbConfig);


    let result;
          
    date = new Date();
    // Insert with autoCommit enabled
    result = await connection1.execute(
      
      `DELETE usuario WHERE(':id_usuario')`,
      [id_usuario], // Bind values
      { autoCommit: true}  // Override the default, non-autocommit behavior
    );
    console.log("Rows inserted: " + result.rowsAffected);  // 1


    // A query on the second connection will only show 'Chris' because
    // inserting 'Alison' is not commited by default.  Uncomment the
    // autoCommit option above and you will see both rows
    

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
  }
}