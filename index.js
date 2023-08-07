require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use('/images',express.static('images'))
const categoriesRouter = require("./routes/categories.route");
const teamRouter = require("./routes/teams.route");





app.use("/categories", categoriesRouter);
app.use(require("./routes/director.route"));
app.use("/teams", teamRouter);
app.use(require('./routes/firm.route'))


app.use("/categories", categoriesRouter);
app.use(require("./routes/teams.route"));
app.use(require("./routes/tasks.route"));
app.use(require('./routes/employee.route'))


mongoose
  .connect(process.env.MONGO_SERVER)
  
  .then(() => console.log("mongoose connect"))
  .catch(() => console.log("mongoose warning"));

app.listen(process.env.PORT, () => {
  console.log("Server start on port: " + process.env.PORT);
});