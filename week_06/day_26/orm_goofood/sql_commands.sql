CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  body VARCHAR(500) NOT NULL,
  dish_id INTEGER NOT NULL,
  FOREIGN KEY (dish_id) REFERENCES dishes(id) ON DELETE RESTRICT
);
-- RESTRICT database will stop you from deleting dish before deleting all the relative comments
-- CASCADE database will automatically delet all the relative comments if you delete a dish

INSERT INTO comments(body,dish_id) VALUES ('Thats good!', 9);

CREATE TABLE dish_types (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

INSERT INTO dish_types(name) VALUES ('dessert');
INSERT INTO dish_types(name) VALUES ('soup');
INSERT INTO dish_types(name) VALUES ('main course');
INSERT INTO dish_types(name) VALUES ('entree');
INSERT INTO dish_types(name) VALUES ('side');
