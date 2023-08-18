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

  return (
    <div className="App">
      <p>Luffy Gear 5</p>
      <img src={cover} alt="cover-img" />
      <span>{product.name}</span>

      <StripeCheckout stripeKey="" token={""} name="Buy Bobblehead">
        <button className="btn-large red darken-4"> Buy BobbleHead Now</button>
      </StripeCheckout>
    </div>
  );
}

export default App;
