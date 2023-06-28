const express = require('express');
const router = express.Router();
const Connection = require('../middlewares/connection');

router.get('/', (req, res) => {
  const { userId } = req.session;

  Connection
    .findConnections(userId)
    .then((connections) => res.json(connections));
});

router.put('/:id/accept', (req, res) => {
  const { id: connectionId } = req.params;

  Connection
    .acceptConnection(connectionId)
    .then((connection) => res.json(connection));
});

router.delete('/:id/reject', (req, res) => {
  const { id: connectionId } = req.params;

  Connection
    .rejectConnection(connectionId)
    .then(() => res.json({ message: 'Connection rejected' }));
});

module.exports = router;
