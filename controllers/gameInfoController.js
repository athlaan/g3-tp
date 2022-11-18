import GameInfo from '../models/Codigo.js';

const gamesOver16 = (req, res) => {
  GameInfo.find((err, games) => {
    res.status(200).json(games)
  });
};

const gamesOver7 = (req, res) => {
  GameInfo.find({ rating : {$gt: 6, $lt: 16} }, (err, games) => {
    res.status(200).json(games)
  });
};

const getGameCode = (req, res) => {
  GameInfo.find({ gameCode: req.params.code }, (err, gameinfo) => {
    res.status(200).json(gameinfo);
  });
};

const postGameCode = (req, res) => {
  const { gameCode, name, rating } = req.body;
  const game = new GameInfo({ gameCode, name, rating });
  game.save((err, game) => {
    res.status(201).json(game);
  });
};

const deleteGameCode = (req, res) => {
  GameInfo.findByIdAndDelete(req.params.code, err => {
    const msg = { text: 'juego borrado' };
    res.status(200).json(msg);
  });
};

const gameController = {
  gamesOver16,
  gamesOver7,
  getGameCode,
  postGameCode,
  deleteGameCode
};

export default gameController;