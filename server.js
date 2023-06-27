const express = require('express');
const app = express();
const logger = require('./middlewares/logger')
const sessions = require('./middlewares/sessions')
const usersController =require('./controllers/users_controller')
const sessionsController = require('./controllers/sessions_controller')
const profilesController = require('./controllers/profiles_controller')
// Define a route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the server4545434545!' });
});

// Start the server
app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
// const app = express()
// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`listening on http://localhost:${port}`))

app.use(logger)
app.use(express.json())
app.use(sessions)
app.use('/api/profiles', profilesController)
app.use('/api/users', usersController)
app.use('/api/sessions', sessionsController)