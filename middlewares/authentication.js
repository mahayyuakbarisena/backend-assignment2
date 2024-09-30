const { Users } = require("../models");
const UnauthenticatedError = require("../errors/UnauthenticatedError");
const { verify } = require("jsonwebtoken");


async function authentication(req, res, next) {
    const { authorization } = req.headers;

    try {
      if (!authorization) throw new UnauthenticatedError("Token not found");
      const [type, token] = authorization.split(" ");
      if (!token) throw new UnauthenticatedError("Token not found");
      const { id } = verify(token, 'secret');
      const user = await Users.findByPk(id);
      if (!user) throw new Error("Invalid user");
      req.user = user;
      next();
    } catch (error) {
      next(error);
    }
}

module.exports = authentication