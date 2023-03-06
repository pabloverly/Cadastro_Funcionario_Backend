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
//DCL (Linguagem de Controle de Dados) 

const fs = require('fs');


async function grant(connection) {

  try {

    const stmts = [

      `ALTER SESSION SET nls_date_format = 'YYYY-MM-DD HH24:MI:SS'`,

      `DROP TABLE usuario PURGE`
    
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


module.exports.grant = grant;


/*
GRANT -> Atribui privilégios de acesso do usuário a objetos do banco de dados.

REVOKE -> Remove os privilégios de acesso aos objetos obtidos com o comando GRANT.

DENY -> O comando é usado para impedir explicitamente que um usuário receba uma permissão específica.

 
*/


