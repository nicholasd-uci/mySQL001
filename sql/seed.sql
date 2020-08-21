-- this is seeded data. its basically your insert query. This basically places the data into a certain part --

USE todo_db;

INSERT INTO items (text, isDone)
VALUES ( 'Cook dinner', false),
( 'Take out trash', true),
('Walk dog', false);
('pick up dry cleaning', true),
('mow the lawn', false)