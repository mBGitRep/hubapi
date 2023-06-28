const express = require('express')
const router = express.Router()

const Profile = require('../models/profile')
const User = require('../models/user');

router.get('/',(req, res) => {
    Profile
        .findAll()
        .then(profiles => res.json(profiles))
})

router.post('/',(req,res) => {
    const { name, image_url, position, education, description, location } = req.body;
    const userId = req.session.userId;

    Profile
        .create(name, image_url, position, education, description, location, userId)
        .then(profile => res.json(profile))
})

router.delete('/:id',(req,res) => {
    const profileId = req.params.id
    
    Profile
        .delete(profileId)
        .then(() => res.json({message: 'deleted successfully'}))
})

router.get('/search', (req, res) => {
  const profileId = req.query.p; // Accessing the 'p' query parameter
//   console.log(profileId)
  Profile
    .findSingleprofile(profileId) // Use the profileId in the query
    .then(data => res.json({profile : data}));
});


module.exports = router;

