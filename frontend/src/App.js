import React, { useState } from "react";
import "./App.css";
import StripeCheckout from "react-stripe-checkout";
import cover from "./cover.webp";

function App() {
  const [product, setProduct] = useState({
    name: "Luffy gear 5 Bobblehead",
    price: 35,
    productBy: "Abhaya++",
  });

  const makePayment = async (token) => {
    const body = {
      token,
      product,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch("http://localhost:5000/payment", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <p>Luffy Gear 5</p>
      <img src={cover} alt="cover-img" />
      <span>{product.name}</span>

      <StripeCheckout
        stripeKey={process.env.REACT_APP_KEY}
        token={makePayment}
        name="Buy Bobblehead"
      >
        <button className="btn-large red darken-4"> Buy BobbleHead Now</button>
      </StripeCheckout>
    </div>
  );
}

export default App;
