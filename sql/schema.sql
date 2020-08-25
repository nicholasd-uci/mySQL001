-- holds the code that designs the database and how it behaves --
-- this is onyl for TEAM MEMBERS can C&P this into their own WORKBENCH --

-- we add this file here to make sure that all the *FileName_db are the same!
DROP DATABASE IF EXISTS todo_db;

-- this is grabbed from workbench --
CREATE DATABASE todo_db;

USE todo_db;
CREATE TABLE items (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    text VARCHAR(25) NOT NULL,
    isDone BOOL NOT NULL DEFAULT 0
);




