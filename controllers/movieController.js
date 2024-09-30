const {Movie} = require('../models');

class MovieController{
    static GetAllMovie(req, res, next){
        console.log("this is get all Movie")
        Movie.findAll()
            .then(result => {
                if (result) {
                    res.status(200).send(result)
                } else {
                    next({ code: 401, message: 'No Movie' })
                }
            })
            .catch(err => {
                return res.status(401).json(err)
            })
    };

}

module.exports = MovieController;