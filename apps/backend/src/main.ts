/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import  session from 'express-session';
import { json } from 'body-parser';
import games from './../data/data.json';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use(json());
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to backend!' });
});

// Định nghĩa các route API ở đây
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if ((username === 'player1' && password === 'player1') ||
      (username === 'player2' && password === 'player2')) {
    req.session.user = { username };
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.get('/api/games', (req, res) => {
  // Lọc các game không thuộc nhóm nào
  const filteredGames = games.filter(game => game.groups && game.groups.length > 0);
  
  res.status(200).json(filteredGames);
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
