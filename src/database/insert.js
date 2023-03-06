const oracledb = require('oracledb');
const dbConfig = require('./dbconfig.js');

//oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

module.exports = {
async  insertTable(id_usuario, nome, senha, setor) {
//module.exports = {
//async  insertTable() { 

  let connection1, connection2;

  try {
    connection1 = await oracledb.getConnection(dbConfig);
    connection2 = await oracledb.getConnection(dbConfig);

    let result;
          
    date = new Date();
    // Insert with autoCommit enabled
    result = await connection1.execute(
      
      `INSERT INTO usuario (cd_usuario, nome, senha, setor, data)  VALUES (:id_usuario, :nome, :senha, :setor, :data)`,
      [id_usuario, nome, senha, setor,date ], // Bind values
      { autoCommit: true}  // Override the default, non-autocommit behavior
    );
    console.log("Rows inserted: " + result.rowsAffected);  // 1


    // A query on the second connection will only show 'Chris' because
    // inserting 'Alison' is not commited by default.  Uncomment the
    // autoCommit option above and you will see both rows
    result = await connection2.execute(
      `SELECT * FROM usuario`
    );
    console.log(result.rows);

  } catch (err) {
    console.error(err);
  } finally {
    try {
      if (connection1)
        await connection1.close();
      if (connection2)
        await connection2.close();
    } catch (err) {
      console.error(err);
    }
  }
  }
}