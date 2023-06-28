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
        VALUES ('SuperMan', 'https://nssdc.gsfc.nasa.gov/planetary/banner/uranus.gif', 'Hero', 'BS', 'Superhero', 'USA'),
('Ironlady', 'https://nssdc.gsfc.nasa.gov/planetary/banner/uranus.gif', 'Actress', 'Diploma', 'Amazing', 'USA'),
('Batman', 'https://nssdc.gsfc.nasa.gov/planetary/banner/uranus.gif', 'Villian', 'None', 'Eats alot', 'Australia'),
('Samantha', 'https://nssdc.gsfc.nasa.gov/planetary/banner/uranus.gif', 'Cartoon', 'Phd', 'Amazing Human', 'London'),
('Superwome', 'https://nssdc.gsfc.nasa.gov/planetary/banner/uranus.gif', 'Housewife', 'Masters', 'Saves Hungry Kids only', 'Germany'),
('Ironman', 'https://nssdc.gsfc.nasa.gov/planetary/banner/uranus.gif', 'Miner', 'Highschool', 'Digs really well', 'NewZealand');



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

