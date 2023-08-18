-------------------

title: Stripe Paymnet Integration

-------------------

## Starting Off...

 For Stripe Payment Integration we require 2 basic things - a frontend where user can enter his card details and continue to pay and a backend where the validation checks and authentication is taken care of for smooth transaction process.


## Basic Setup

- FRONTEND : CRA Template  

```bash
  npx create-react-app frontend
```

  Let this package install all the dependencies and in the meanwhile lets proceed with the backend setup as well. 


- BACKEND - Setup

```bash
mkdir backend
cd backend
npm init -y
```

First create a backend folder where in we will write all the logic for our backend. Move into the folder and then run the `npm init -y` command. This will install a `package.json` file into backend folder.
Now once you are done with all this, lets also install the packages which we will be using for this project.

1. cors
2. express
3. stripe
4. uuid
5. nodemon
6. dotenv

To install these packages run the following command

```bash
npm i cors express stripe uuid nodemon dotenv
```

Let's understand why exactly do we require these packages.
- Cors - used for cross origin resource sharing with which a front-end client can make requests for resources to an external back-end server. The single-origin policy does not allow cross-origin requests and CORS headers are required to bypass this feature.

- Express - additional package built on top of node which makes our life easier. Listening to the server.

- Stripe - for Stripe Payment integration.

- uuid - It is used for generating a unique id for each request, so that we can ensure for every transaction request we are generating a payment flow.

- nodemon - It is a package which re-spins the server if any changes are made to the project and saved. Not a required package but it makes our life easier. You can install this package as a dev dependecy also if you dont want this to publish in the production. Here's how you can do this - run the `npm i --save-dev nodemon`.

- dotenv - This package helps us to configure and use env variables inside our project to safeguard our private keys and values.


Now once the Basic setup is clear, you just wanna change a script in `package.json` file and we will good to go.

Add the following script in the `package.json` file

```js
"scripts": {
    "start": "nodemon index.js"
  },
```

Well Kudos! You successfully created the backend setup for this project. Give yourself a pat on the back, and lets move forward with the backend logic.


Moving on with the basic setup for `index.js` file : 

```js
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


```

Copy paste the file into `index.js` and then spin the server by running the command 
```bash 
npm start
```

This will spin up the server, open up the console and if you can see `Server is running on  port 5000` , go to `http://localhost:5000/` and if you see IT WORKS, you are good to go. If in case you are getting any errors, please troubleshoot. Make sure you are in the backend dir when you run `npm start`