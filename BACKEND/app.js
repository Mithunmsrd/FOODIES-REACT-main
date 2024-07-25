const express = require("express");
const { mongoose } = require("mongoose");
const app = express();
const cors = require("cors");
const routes = require("./route/login");

const cookieParser = require("cookie-parser");

const authRoute=require('./route/sign')


app.use(cookieParser())

app.use(express.json());

app.use(
  cors({ 
    origin: "http://localhost:5173",
  })
);



app.use("/", routes);
app.use("/",authRoute)

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
mongoose.connect("mongodb://localhost:27017/food-booking");

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});