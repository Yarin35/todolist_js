CREATE DATABASE notes_apps;
USE notes_app;

CREATE TABLE notes (
       id intefer PRIMARY KEY AUTO_INCREMENT,
       title VARCHAR(255) NOT NULL,
       contents TEXT NOT NULL,
       created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO notes (title, contents)
VALUES
('My first note', 'First content'),
('My second note', 'second content');
