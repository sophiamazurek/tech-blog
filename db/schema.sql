DROP DATABASE IF EXISTS p5q6mh0auotlties;
CREATE DATABASE p5q6mh0auotlties;


use p5q6mh0auotlties;

INSERT INTO user (id, name, email, password)
VALUES (1, "Sally", "sally@sally.com", "88888888");

INSERT INTO project (id, name, description, date_created, needed_funding, user_id)
VALUES (1, "Music Near Me", "A mobile app that will send you notifications whenever a concert is playing in your area.","2021-03-19 02:19:05", 5000,1);