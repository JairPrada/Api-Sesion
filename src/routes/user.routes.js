const userRouter = require('express').Router();
const userControler = require('../controllers/user.controler');

userRouter.post('/signup', [], userControler.signup);

userRouter.get('/confirm/:token', [], userControler.confirm);

module.exports = userRouter;
