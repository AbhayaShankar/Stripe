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

