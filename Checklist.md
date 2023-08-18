- Basic Setup - frontend  / Backend
- Add index.js file in backend folder.
- Add a post route (payment) which we will hit from frontend.
- Setup the frontend/backend.

### Backend
- create a customer from stripe.
- create a charge on that where we pass on 2 parameters : 

```js
const charge = await stripe.charges.create({options} , {idempotencyKey})
```

first one is the options which we wanna extract out of which few are compulsory like `amount` , `currency`, `customer`

second one is the `idempotency key` which ensures that transaction for a particular bill is generated only once and we don't generate different bill for the same request.


### Frontend

`npm i react-stripe-checkout`
`cdn for Materialize css`

Little bit refractoring the code.

- import StripeCheckout from "react-stripe-checkout";
- import React, { useState } from "react";

Set up a state for product : 

```js
 const [product, setproduct] = useState({
    name: "Luffy gear 5 Bobblehead",
    price: 35,
    productBy: "Abhaya++",
  });
```

Then basic text, img and our `StripeCheckout` component with 2 mandatory keys : `stripeKey` and `token`.

```js
      <p>Luffy Gear 5</p>
      <img src={cover} alt="cover-img" />

      <StripeCheckout stripeKey="" token={""} name="Buy Bobblehead">
        <button className="btn-large red darken-4"> Buy BobbleHead Now</button>
      </StripeCheckout>
```