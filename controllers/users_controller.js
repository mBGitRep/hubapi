const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');


router.post('/', (req, res) => {
  const { name, email, password } = req.body;
  console.log('I am posting to users')

  User.findByEmail(email)
    .then(existingUser => {
      if (existingUser) {
        console.log("Email already exists");
        res.json({ message: "Email already exists" });
      } else {
        const passwordDigest = bcrypt.hashSync(password, 12);

        User.create(name, email, passwordDigest)
          .then(newUser => res.json({ email: newUser }))
      }
    })
// Search users
router.get('/', (req, res) => {
  const { searchTerm } = req.query;

  User.search(searchTerm)
    .then(results => {
      res.json(results);
    })
    .catch(error => {
      console.error('Error searching users:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});
})
module.exports = router;


