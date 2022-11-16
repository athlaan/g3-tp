import express from 'express';
import gameController from '../controllers/gameInfoController.js';

const gameRouter = express.Router();

gameRouter.route('/games/:code')
    .get(gameController.getGameCode)
    .delete(gameController.deleteGameCode);
    
gameRouter.route('/games')
    .get(gameController.gamesOver16)
    .get(gameController.gamesOver7)
    .post(gameController.postGameCode);

export default gameRouter;