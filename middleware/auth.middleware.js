
const jwt = require("jsonwebtoken");
const Director = require("../models/Director.model");
module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

    const director = await Director.findById(payload.id);
    req.director = director;
    next();
  } catch (err) {
    return res.status(401).json({err: "Токен неверный"});
  }
};

