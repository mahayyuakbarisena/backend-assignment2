const { Users } = require('../models');
const bcrypt = require('../helpers/bcrypt');
const jwt = require('../helpers/jwt');


class UsersController {
    static register(req, res, next) {
        const { name, username, email, password, role, address, phoneNumber } = req.body;

        Users.create({
            name,
            username,
            email,
            password,
            role,
            address,
            phoneNumber
        })
            .then(result => {
                let response = {
                    id: result.id,
                    email: result.email
                }
                res.status(201).send(response)
            })
            .catch(err => {
                next(err)
            })

    }

    static login(req, res, next) {
        const { email, password } = req.body;
        console.log(req)
        Users.findOne({
            where: {
                email
            }
        })
            .then(result => {
                if (result) {
                    if (bcrypt.comparePass(password, result.password)) {
                        let access_token = jwt.signIn(result.id, result.email, result.role)
                        res.status(200).send({ "access_token": access_token })
                    } else {
                        next({ code: 401, message: 'invalid email / password' })
                    }

                } else {
                    next({ code: 401, message: 'invalid email / password' })
                }
            })
            .catch(err => {
                return res.status(401).json(err)
                next(err)
            })
    }

}

module.exports = UsersController;