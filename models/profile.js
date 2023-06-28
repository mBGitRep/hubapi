const db = require("../db/db");

const Profile = {
  findAll: () => {
    const sql = "SELECT * FROM profiles";

    return db.query(sql).then((dbRes) => dbRes.rows);
  },

  create: (name, image_url, position, education, description, location, userId) => {
    const sql = `
        INSERT INTO profiles(name, image_url, position, education, description, location, user_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING  *
        `;

    return db
      .query(sql, [
        name,
        image_url,
        position,
        education,
        description,
        location,
        userId,
      ])
      .then((dbRes) => dbRes.rows[0]);
  },

findSingleprofile: (profileId) => {
    const sql = "SELECT * FROM profiles WHERE id = $1";

    return db.query(sql, [profileId]).then((dbRes) => dbRes.rows[0]);
  }


};


module.exports = Profile;


