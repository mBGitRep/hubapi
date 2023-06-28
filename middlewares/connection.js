const db = require("../db/db");

const Connection = {
  create: (senderId, receiverId) => {
    const sql = `
      INSERT INTO connections (sender_id, receiver_id)
      VALUES ($1, $2)
      RETURNING *
    `;

    return db
      .query(sql, [senderId, receiverId])
      .then((dbRes) => dbRes.rows[0]);
  },

  findConnections: (userId) => {
    const sql = `
      SELECT connections.id, profiles.name, profiles.image_url, profiles.position, profiles.education, profiles.location
      FROM connections
      INNER JOIN profiles ON profiles.user_id = connections.sender_id
      WHERE connections.receiver_id = $1
        AND connections.accepted = FALSE
    `;

    return db
      .query(sql, [userId])
      .then((dbRes) => dbRes.rows);
  },

  acceptConnection: (connectionId) => {
    const sql = `
      UPDATE connections
      SET accepted = TRUE
      WHERE id = $1
      RETURNING *
    `;

    return db
    .query(sql, [connectionId]);
}
};

module.exports = Connection;
