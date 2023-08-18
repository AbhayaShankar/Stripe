const cors = require("cors");
const express = require("express");

// TODO: Add the pub key to configure the stripe
const stripe = require("stripe")("");
const { v4: uuidv4 } = require("uuid");

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("IT WORKS...");
});

app.post("/payment", async (req, res) => {
  const { product, token } = req.body;
  console.log("Product", product);
  console.log("Price", product.price);

  // Special key for ensuring a user is charged only once for his/her products.
  const idemPotencyKey = uuidv4();

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchase of ${product.name}`,
        shipping: {
          name: token.card.name,
          address: {
            country: token.card.address_country,
          },
        },
      },
      { idemPotencyKey }
    );

    res.status(200).json(charge);
  } catch (err) {
    console.log(err);
  }
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
