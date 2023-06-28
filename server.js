const express = require('express');
const app = express();
const logger = require('./middlewares/logger')
const sessions = require('./middlewares/sessions')
const usersController =require('./controllers/users_controller')
const sessionsController = require('./controllers/sessions_controller')
const profilesController = require('./controllers/profiles_controller')

if (process.env.NODE_ENV === 'production') {
  const path = require('path')
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}


// Define a route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the server4545434545!' });
});
const port = process.env.PORT || 5000;
// Start the server
app.listen(port, () => {
  console.log('Server is listening on port 5000');
});


app.use(logger)
app.use(express.json())
app.use(sessions)
app.use('/api/profiles', profilesController)
app.use('/api/users', usersController)
app.use('/api/sessions', sessionsController)



