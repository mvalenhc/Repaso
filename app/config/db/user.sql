--crear la base de datos
CREATE DATABASE USER COLLATE "UTF8_GENERAL_CI"
--crea las tablas
CREATE TABLE USERS (
    ID INT(5) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    NAME VARCHAR(50)
);
--PARA INSERTAR DATOS
CREATE PROCEDURE `spInsertUser`(IN `_NAME` VARCHAR(50)) NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER 
BEGIN 
    INSERT INTO USERS ( NAME ) VALUES (_NAME); 
END;
CALL spInsertUser('Santiago');
--MOSTRAR TODOS LOS DATOS 
CREATE PROCEDURE `spFindAllUser`() NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER 
BEGIN 
    SELECT ID, NAME FROM USERS; 
END;
CALL spFindAllUser();
--MOSTRAR SOLO UN DATO EN ESPECIFICO
CREATE PROCEDURE `spFindUser`(IN `_ID` INT(5)) NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER 
BEGIN 
    SELECT ID, NAME FROM users WHERE ID = _ID; 
END; 
CALL spFindUser (1)
--ACTUALIZAR DATOS
CREATE PROCEDURE `spUpdateUser`(IN `_ID` INT(5), IN `_NAME` VARCHAR(50)) NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER 
BEGIN 
    UPDATE users SET NAME = _NAME WHERE ID = _ID; 
END; 
CALL `spUpdateUser`(1, "BECERRA");

--ELIMINAR UN REGISTR DE USUARIO
CREATE PROCEDURE `spDeleteUser`(IN `_ID` INT(5)) NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER 
BEGIN 
    DELETE FROM users WHERE ID=ID; 
END; 
