-- Create databse and table
CREATE DATABASE my_database;

CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255)
);

-- Update table to insert a new row
INSERT INTO contacts (email) VALUES ('some_email@gmail.com');

-- Read id and email out of contacts table
SELECT id, email FROM contacts;

-- Read all the column from contacts where id is 2
SELECT * FROM contacts WHERE id = 2;

-- Update
UPDATE contacts SET email="new_email@gmail.com" WHERE id = 2;

-- Delete the row where id is 1 from contacts table
DELETE FROM contacts WHERE id = 1;

-- Delete the contacts table
DROP TABLE contacts;
