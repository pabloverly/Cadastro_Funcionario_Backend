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
//DML (Linguagem de Manipulação de Dados) 

const fs = require('fs');


async function insertTable(connection) {

  try {

    const stmts = [

      `INSERT INTO dbati.incidents ( id,title,description,ong_id) VALUES ('123','teste','teste','pablo.verly')`
     // `INSERT INTO usuario VALUES (1, 'Pablos',    100, 'All Green',              '2019-07-21 17:00:00')`,

      //`INSERT INTO usuario VALUES (2, 'Bia',  90, 'Full Yellow',            '2019-07-30 12:00:00')`,

      //`INSERT INTO usuario VALUES (3, 'Pierre',    92, 'More Yellow than Green', '2019-07-16 14:30:00')`,

      //`INSERT INTO usuario VALUES (4, 'Pitter',    78, 'More Yellow than Green', '2019-08-01 11:00:00')`,

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



module.exports.insertTable = insertTable;


/*
SELECT -> Recupera linhas do banco de dados e permite a seleção de uma ou várias linhas ou colunas de uma ou várias tabelas 

INSERT -> Instrução utilizada para inserir dados a uma ou mais tabelas no banco de dados 

UPDATE -> Instrução utilizada para atualizar dados de uma ou mais tabelas no banco de dados

DELETE -> Instrução utilizada para excluir dados de uma ou mais tabelas no banco de dados

MERGE -> Realiza operações de inserção, atualização ou exclusão em uma tabela de destino com base nos resultados da junção com a tabela de origem

BULK INSET -> Importa um arquivo de dados em uma tabela ou exibição do banco de dados em um formato especificado pelo usuário

*/


