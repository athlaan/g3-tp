import express from 'express';
import gameController from '../controllers/gameInfoController.js';

const gameRouter = express.Router();

gameRouter.route('/games/:code')
    .get(gameController.getGameCode)
    .delete(gameController.deleteGameCode);
    
gameRouter.route('/games')
    .get(gameController.gamesOver16)
    .post(gameController.postGameCode);

gameRouter.route('/games/over7')
    .get(gameController.gamesOver7);
    
export default gameRouter;