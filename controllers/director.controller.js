const Director = require("../models/Director.model");
const bcrypt = require("bcrypt");
const { json } = require("express");
const jwt = require("jsonwebtoken");

module.exports.directorController = {
  getMe: async (req, res) => {
    const myToken = req.headers.authorization;
    const token = myToken.split(" ");
    const decoded = jwt.verify(token[1], process.env.SECRET_JWT_KEY);
    const director = await Director.findById(decoded.id);

    res.json(director);
  },

  addDirector: async (req, res) => {
    try {
      const { fullName, email, password } = req.body;
      const hashPassword = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );
      const director = await Director.create({
        fullName,
        email,
        password: hashPassword,
      });
      res.json(director);
    } catch (error) {
      res.json({ error: "Не удалость зарегистрироваться" });
    }
  },
  deleteDirectorById: async (req, res) => {
    try {
      await Director.findByIdAndDelete(req.params.id);
      res.json("Удалено");
    } catch (err) {
      res.json({ error: "Ошибка при удалении user" });
    }
  },
  getOneUser: async (req, res) => {
    try {
      const data = await Director.findById(req.user.id);
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  getUpdateDirector: async (req, res) => {
    try {
      const director = await Director.findByIdAndUpdate(req.params.id, {
        $set: {
          fullName: req.body.fullName,
          email: req.body.email,
          password: req.body.password,
        },
      });
      res.json(director);
    } catch (error) {
      res.status(500).json({
        error: "Не удалось изменить статью" + " " + error.message,
      });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const condidate = await Director.findOne({ email });
      if (!condidate) {
        return res.status(401).json({ error: "Неверный email или пароль" });
      }
      const valid = await bcrypt.compare(password, condidate.password);
      if (!valid) {
        return res.status(401).json({ error: "Неверный email или пароль" });
      }
      const payload = {
        id: condidate._id,
        email: condidate.email,
      };
      const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
        expiresIn: "24h",
      });
      return res.json({ token });
    } catch (error) {
      return res.status(400).json({ error: "Неверные данные" });
    }
  },
};
