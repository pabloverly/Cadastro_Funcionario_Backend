
## Estrutura 

### FUNCIONARIO
   
``` 
CREATE TABLE FUNCIONARIO (
	  Id            NUMBER(8,0)  PRIMARY KEY NOT NULL,
	  Nome          VARCHAR2(250)          NOT NULL,
	  CPF   		VARCHAR2(11)  NOT NULL,
	  DataAdmissao  DATE         NOT NULL,
	  UltilizaVT 	char(1) DEFAULT 'N'   NOT NULL,
	  DataCadastro  DATE   NOT NULL,
	  DataAlteracao DATE  NULL,
	  DataExclusao  DATE  NULL)
```
	  	
	 
```
ALTER TABLE FUNCIONARIO ADD
CONSTRAINT UltilizaVT_CK 
CHECK ( UltilizaVT IN ('S', 'N'));
```

 
```
CREATE SEQUENCE FUNCIONARIO_id
  MINVALUE 1
  MAXVALUE 999999999999999999999999999
  INCREMENT BY 1
  NOCYCLE
  NOORDER
  NOCACHE```

Obs.:
SQL Error [2269] [42000]: ORA-02269: a coluna-chave não pode ser do tipo de dados LONG

### CARGO 
	 
``
`CREATE TABLE CARGO (
	  Id            NUMBER(8,0) primary key,	 
	  Nome          VARCHAR2(250)          NOT NULL,	
	  DataCadastro  DATE  NOT NULL,
	  DataAlteracao DATE  NULL,
	  DataExclusao  DATE  NULL )
```
	 
```
ALTER TABLE FUNCIONARIO
ADD CargoId NUMBER(8,0)  CONSTRAINT CargoId_FK 
REFERENCES CARGO(Id);
```
