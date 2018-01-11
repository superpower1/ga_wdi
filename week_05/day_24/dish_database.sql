-- dish (name, img_url, location, author)

CREATE TABLE dishes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(300),
  img_url VARCHAR(400),
  location VARCHAR(400),
  author VARCHAR(255)
);

INSERT INTO dishes(name, author) VALUES ('Dragon steak', 'sp1');
