const cors = require("cors");
const express = require("express");

// TODO: Add the pub key to configure the stripe
const stripe = require("stripe")("");

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("IT WORKS...");
});

// Listen
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server listening on PORT ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
