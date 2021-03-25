const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const bodyparser = require("body-parser");

const User = require("./models/Users");

const app = express();
const PORT = process.env.PORT || 3001;

const route = express.Router();

app.use(bodyparser.json());
mongoose.connect(`mongodb://localhost:27017/slope`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(cors());

app.use((req, res, next) => {
  // console.log(`${new Date().toString()} ${req.originalUrl}`)
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-access-token"
  );

  // Request methods you wish to allow
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.header("Access-Control-Allow-Headers", "content-type, authorization");
  res.header(
    "Access-Control-Expose-Headers",
    "Content-Length, your-access-token"
  );

  // Set to true if you need the website to include cookies in the requests sent // to the API (e.g. in case you use sessions)

  next();
});

route.get("/users", async (req, res) => {
  const users = await User.find();

  return res.status(200).json(users);
});

route.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  //   username == null && res.status(403);

  if (user.username == username && user.password == password) {
    return res.status(200).json(user);
  } else {
    return res.status(403);
  }
});

route.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  const user = new User(req.body);
  const saveduser = await user.save();

  return res.status(200).json(saveduser);
});

app.use(route);
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
