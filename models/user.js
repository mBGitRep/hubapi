const db = require("../db/db");

const User = {
  findById: (id) => {
    const sql = `
    SELECT * FROM users WHERE id = $1
    `;
    return db.query(sql, [id]).then((dbRes) => dbRes.rows[0].email);
  },

  findByEmail: (email) => {
    const sql = `
      SELECT * FROM users WHERE email = $1
    `;

    return db.query(sql, [email]).then((dbRes) => dbRes.rows[0]);
  },

  create: (name, email, passwordDigest) => {
    const sql = `
          INSERT INTO users(name, email, password_digest)
          VALUES ($1, $2, $3)
          RETURNING *
        `;

    return db
      .query(sql, [name, email, passwordDigest])
      .then((dbRes) => dbRes.rows[0].email);
  },


search: (searchTerm) => {
  const sql = `
    SELECT * FROM users WHERE name ILIKE $1 OR email ILIKE $1
  `;
  const searchValue = `%${searchTerm}%`;

  return db.query(sql, [searchValue]).then(dbRes => dbRes.rows);
}
};

module.exports = User;

