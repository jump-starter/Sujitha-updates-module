CREATE DATABASE updatessdc;

CREATE TABLE PROJECT(
    id INTEGER PRIMARY KEY NOT NULL,
    createdAt timestamp
);

CREATE TABLE UPDATES(
    id INTEGER PRIMARY KEY,
    createdAt timestamp,
    title varchar (255) NOT NULL,
    body text,
    likes SERIAL,
    project_id INTEGER REFERENCES PROJECT(id)
);

CREATE TABLE COMMENT(
    id INTEGER PRIMARY KEY,
    createdAt timestamp,
    body text,
    avatar text,
    username VARCHAR(50)
);

CREATE TABLE COMMENTPROJECT(
    id INTEGER PRIMARY KEY, 
    project_id INTEGER REFERENCES PROJECT(id),
    comment_id INTEGER REFERENCES COMMENT(id)
);

CREATE TABLE COMMENTUPDATE(
    id INTEGER PRIMARY KEY, 
    update_id INTEGER REFERENCES UPDATES(id), 
    comment_id INTEGER REFERENCES COMMENT(id)
);
