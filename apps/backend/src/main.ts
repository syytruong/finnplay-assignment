import express, { Request, Response } from 'express';
import * as path from 'path';
import session from 'express-session';
import { json } from 'body-parser';
import cors from 'cors';
import games from './../data/data.json';

const app = express();

app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use(json());
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

app.get('/api', (req: Request, res: Response) => {
  res.send({ message: 'Welcome to backend!' });
});

app.post('/api/login', (req: Request, res: Response): void => {
  const { username, password } = req.body;
  if ((username === 'player1' && password === 'player1') ||
      (username === 'player2' && password === 'player2')) {
    req.session.user = { username };
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.get('/api/check-session', (req: Request, res: Response) => {
  if (req.session.user) {
    res.status(200).json({ loggedIn: true });
  } else {
    res.status(401).json({ loggedIn: false });
  }
});

app.get('/api/games', (req: Request, res: Response) => {
  const { name, providers, groups } = req.query as {
    name?: string;
    providers?: string | string[];
    groups?: string | string[];
  };

  let filteredGames = games;

  if (name) {
    filteredGames = filteredGames.filter(game => game.name.includes(name));
  }

  if (providers) {
    const providerList = Array.isArray(providers) ? providers : [providers];
    filteredGames = filteredGames.filter(game => providerList.includes(game.provider));
  }

  if (groups) {
    const groupList = Array.isArray(groups) ? groups : [groups];
    filteredGames = filteredGames.filter(game => game.groups.some(group => groupList.includes(group)));
  }

  // Filter out games that don't belong to any group
  filteredGames = filteredGames.filter(game => game.groups && game.groups.length > 0);

  res.status(200).json(filteredGames);
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);