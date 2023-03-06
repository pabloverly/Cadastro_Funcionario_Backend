/* Copyright (c) 2019, Oracle and/or its affiliates. All rights reserved. */

/******************************************************************************
 *
 * You may not use the identified files except in compliance with the Apache
 * License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * NAME
 *   demosetup.js
 *
 * DESCRIPTION
 *   Functions to create schema objects used by some node-oracledb examples
 *
 *****************************************************************************/
//DDL (Linguagem de Definição de Dados) – 
const fs = require('fs');


async function createTable(connection) {

  try {

    const stmts = [

      `ALTER SESSION SET nls_date_format = 'YYYY-MM-DD HH24:MI:SS'`,

      `DROP TABLE usuario PURGE`,

      `CREATE TABLE usuario (
         cd_usuario       NUMBER NOT NULL,
         nome   VARCHAR2(400),
         senha   NUMBER,
         setor VARCHAR2(25),
         data   DATE
       )`
    ];

    for (const s of stmts) {
      try {
        await connection.execute(s);
      } catch(e) {
        if (e.errorNum != 942)
          throw(e);
      }
    }
    await connection.commit();

  } catch (err) {
    console.error(err);
  }
}

async function alterTable(connection) {

  try {

    const stmts = [

   
    ];

    for (const s of stmts) {
      try {
        await connection.execute(s);
      } catch(e) {
        if (e.errorNum != 942)
          throw(e);
      }
    }
    await connection.commit();

  } catch (err) {
    console.error(err);
  }
}

async function dropTable(connection) {

  try {

    const stmts = [

      `ALTER SESSION SET nls_date_format = 'YYYY-MM-DD HH24:MI:SS'`,

      `DROP TABLE usuario PURGE`,

         
    ];

    for (const s of stmts) {
      try {
        await connection.execute(s);
      } catch(e) {
        if (e.errorNum != 942)
          throw(e);
      }
    }
    await connection.commit();

  } catch (err) {
    console.error(err);
  }
}


module.exports.createTable = createTable;

module.exports.alterTable = alterTable;

module.exports.dropTable = dropTable;

/*

ALTER -> Use as instruções ALTER para modificar a definição de entidades existentes. Use ALTER TABLE para adicionar uma nova coluna a uma tabela ou use ALTER DATABASE                                   para definir opções do banco de dados.

CREATE -> Use instruções CREATE para definir novas entidades. Use CREATE TABLE para adicionar uma nova tabela em um banco de dados.

DROP -> Use instruções DROP para remover entidades existentes. Use DROP TABLE para remover uma tabela de um banco de dados.

DISABLE TRIGGER -> Desabilita uma Trigger DML, DDL ou de logon.

ENABLE TRIGGER -> Habilita uma Trigger DML, DDL ou de logon.

TRUNCATE TABLE -> Remove todas as linhas de uma tabela sem registrar as exclusões de linhas individuais.

UPDATE STATISTICS -> Atualiza estatísticas de otimização de consulta de uma tabela ou view indexada.
*/


