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

CREATE TABLE searches(
    id SERIAL PRIMARY KEY,
    profile_name TEXT,
    profile_position TEXT,
    profile_education TEXT,
    profile_location TEXT,
    FOREIGN KEY(profile_name) REFERENCES profiles(name),
    FOREIGN KEY(profile_position) REFERENCES profiles(position),
    FOREIGN KEY(profile_education) REFERENCES profiles(education),
    FOREIGN KEY(profile_location) REFERENCES profiles(location)
);