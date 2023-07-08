CREATE DATABASE hub360;
\c hub360

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password_digest TEXT
);

CREATE TABLE profiles(
    id SERIAL PRIMARY KEY,
    name TEXT,
    user_id INT,
    image_url TEXT,
    position TEXT,
    education TEXT,
    description TEXT,
    location TEXT,
    FOREIGN KEY(user_id) REFERENCES users(id)
);
INSERT INTO profiles(name, image_url, position, education, description, location)
        VALUES ('SuperMan', 'https://imgur.com/roFXvfn.jpg', 'Hero', 'BS', 'Superhero', 'USA'),
('Ironlady', 'https://imgur.com/FelQY2Q.jpg', 'Actress', 'Diploma', 'Amazing', 'USA'),
('Batman', 'https://imgur.com/YTm4E9P.jpg', 'Villian', 'None', 'Eats alot', 'Australia'),
('Samantha', 'https://imgur.com/I2bRrMJ.jpg', 'Cartoon', 'Phd', 'Amazing Human', 'London'),
('Superwomen', 'https://imgur.com/vQtAMLc.jpg', 'Housewife', 'Masters', 'Saves Hungry Kids only', 'Germany'),
('Ironman', 'https://imgur.com/F5jnVyB.jpg', 'Miner', 'Highschool', 'Digs really well', 'NewZealand');




CREATE TABLE searches(
    id SERIAL PRIMARY KEY,
    profile_name TEXT,
    profile_position TEXT,
    profile_education TEXT,
    profile_location TEXT

);

ALTER TABLE profiles
ADD CONSTRAINT profiles_name_unique UNIQUE (name),
ADD CONSTRAINT profiles_position_unique UNIQUE (position),
ADD CONSTRAINT profiles_location_unique UNIQUE (location);





ALTER TABLE profiles
ADD CONSTRAINT profiles_name_unique UNIQUE (name),
ADD CONSTRAINT profiles_position_unique UNIQUE (position),
ADD CONSTRAINT profiles_location_unique UNIQUE (location);

