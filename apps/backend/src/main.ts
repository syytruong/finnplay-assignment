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

app.post('/api/logout', (req: Request, res: Response): void => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Logout failed' });
    }
    res.status(200).json({ message: 'Logout successful' });
  });
});

app.get('/api/check-session', (req: Request, res: Response) => {
  if (req.session.user) {
    res.status(200).json({ loggedIn: true });
  } else {
    res.status(401).json({ loggedIn: false });
  }
});

app.get('/api/games', (req: Request, res: Response) => {
  const { search, providers, groups } = req.query as {
    search?: string;
    providers?: string[];
    groups?: string[];
  };

  let filteredGames = games;

  console.log('search', search);

  if (search) {
    const searchLower = search.toLowerCase();
    filteredGames = filteredGames.filter(game => game.name.toLowerCase().includes(searchLower));
  }

  if (providers) {
    filteredGames = filteredGames.filter(game => providers.includes(game.provider));
  }

  if (groups) {
    filteredGames = filteredGames.filter(game => game.groups.some(group => groups.includes(group)));
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