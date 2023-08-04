const jwt = require("jsonwebtoken");
const Director = require("../models/Director.model");
module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "нет пользователя" });
  }
  const [type, token] = authorization.split(" ");
  if (type !== "Bearer") {
    return res.status(401).json({error: "неверный тип токена"});
  }
  try {
    const payload = await jwt.verify(token, process.env.SECRET_JWT_KEY);

    const director = await Director.findById(payload.id);
    req.director = director;
    next();
  } catch (err) {
    return res.status(401).json({err: "Токен неверный"});
  }
};