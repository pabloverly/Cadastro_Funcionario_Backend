### https://hub.docker.com/r/oracleinanutshell/oracle-xe-11g

## CLIENT
mkdir -p /opt/oracle
cd /opt/oracle
wget https://download.oracle.com/otn_software/linux/instantclient/instantclient-basic-linuxx64.zip
unzip instantclient-basic-linuxx64.zip

sudo sh -c "echo /opt/oracle/instantclient_19_11 > /etc/ld.so.conf.d/oracle-instantclient.conf"
sudo ldconfig



![](https://oracle.github.io/node-oracledb/logo.png)
https://github.com/oracle/node-oracledb
 Code-oracledb para Node.js. fornece aplicativos Oracle Database de alto desempenho. Conectar o Node.js. 10.16, 12 ou posterior ao Oracle Database.


####Licença
>Copyright (c) 2015, 2020, Oracle e / ou suas afiliadas. Todos os direitos reservados.


#DML (Linguagem de Manipulação de Dados) – É um conjunto de instruções usada nas consultas e modificações dos dados armazenados nas tabelas do banco de dados.

###Alguns Exemplos:
SELECT -> Recupera linhas do banco de dados e permite a seleção de uma ou várias linhas ou colunas de uma ou várias tabelas 
INSERT -> Instrução utilizada para inserir dados a uma ou mais tabelas no banco de dados 
UPDATE -> Instrução utilizada para atualizar dados de uma ou mais tabelas no banco de dados
DELETE -> Instrução utilizada para excluir dados de uma ou mais tabelas no banco de dados
MERGE -> Realiza operações de inserção, atualização ou exclusão em uma tabela de destino com base nos resultados da junção com a tabela de origem
BULK INSET -> Importa um arquivo de dados em uma tabela ou exibição do banco de dados em um formato especificado pelo usuário



#DDL (Linguagem de Definição de Dados) – É um conjunto de instruções usado para criar e modificar as estruturas dos objetos armazenados no banco de dados.

###Alguns Exemplos:
ALTER -> Use as instruções ALTER para modificar a definição de entidades existentes. Use ALTER TABLE para adicionar uma nova coluna a uma tabela ou use ALTER DATABASE                                   para definir opções do banco de dados.
CREATE -> Use instruções CREATE para definir novas entidades. Use CREATE TABLE para adicionar uma nova tabela em um banco de dados.
DROP -> Use instruções DROP para remover entidades existentes. Use DROP TABLE para remover uma tabela de um banco de dados.
DISABLE TRIGGER -> Desabilita uma Trigger DML, DDL ou de logon.
ENABLE TRIGGER -> Habilita uma Trigger DML, DDL ou de logon.
TRUNCATE TABLE -> Remove todas as linhas de uma tabela sem registrar as exclusões de linhas individuais.
UPDATE STATISTICS -> Atualiza estatísticas de otimização de consulta de uma tabela ou view indexada.
 

#DCL (Linguagem de Controle de Dados) – São usados para controle de acesso e gerenciamento de permissões para usuários em no banco de dados. Com eles, pode facilmente permitir ou negar algumas ações para usuários nas tabelas ou registros (segurança de nível de linha).

###Alguns Exemplos:
GRANT -> Atribui privilégios de acesso do usuário a objetos do banco de dados.
REVOKE -> Remove os privilégios de acesso aos objetos obtidos com o comando GRANT.
DENY -> O comando é usado para impedir explicitamente que um usuário receba uma permissão específica. 



#TCL (Linguagem de Controle de Transações) – São usados ​​para gerenciar as mudanças feitas por instruções DML . Ele permite que as declarações a serem agrupadas em transações lógicas.
 
###Alguns Exemplos:
COMMIT -> É usado para salvar permanentemente qualquer transação no banco de dados.
ROLLBACK -> Este comando restaura o banco de dados para o último estado commited.

 