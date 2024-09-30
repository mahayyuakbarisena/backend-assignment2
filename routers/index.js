const router = require('express').Router();
const authentication = require('../middlewares/authentication');

const UsersController = require('../controllers/usersController');
const MoviesController = require('../controllers/moviesController');

router.post('/users/register', UsersController.register);
router.post('/users/login', UsersController.login);

router.use(authentication);
router.get('/movies', MoviesController.GetAllMovies);

module.exports = router;