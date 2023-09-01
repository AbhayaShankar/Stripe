---
title: "Stripe Payment Integration"
date: "2023-08-26"
slug: "stripe-payment-integration"
image: "stripe.png"
excerpt: "Stripe payment integration streamlines online transactions, offering secure and efficient payment processing for businesses, simplifying customer transactions."
isFeatured: true
isPublished: true
---

## 👋 Welcome to Stripe Integration

My name is Abhaya Shankar and I'll be guiding you for this short project.

## 📖 What You will be learning ?

1. How to Integrate Stripe Payment Gateway in your React Project.

## 🤏 Prerequisites

- If you have worked with javascript and React, then you will be good to go.
- Basic knowledge of Nodejs. (Beginners also can follow this)
- You need to have [Node](https://nodejs.org/en) installed.
- Make sure you install the dependent packages.
- And a cup of coffee. ☕

## ⚒️ What are we Building ?

We are building a simple project for Integrating Stripe into React Project for Payments.

Then We will Buy a Luffy gear 5 Bobblehead because I am an Anime nerd and a big fan of One Piece, you should try it too.

Well anyway, Hope you have your coffee. Take a sip of your coffee and let's build this.

## 🚀 Starting Off...

 For Stripe Payment Integration we require 2 basic things - a frontend where user can enter his card details and continue to pay and a backend where the validation checks and authentication is taken care of for smooth transaction process.


## 🔧 Basic Frontend Setup

- FRONTEND : CRA Template  

```bash
  npx create-react-app frontend
```

  Let this install all the dependencies and create a basic CRA template. This will take 15-30 sec of time depending upon your processor and network speed, it might take more. So wait till these gets installed and in the meanwhile lets proceed with the backend setup as well.

## 🔧 Basic Backend Setup

- BACKEND - Setup

``` bash
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

This will take hardly 30-40 secs to install and once done you should have `package.json` file looking like this.

```js
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "nodemon": "^3.0.1",
    "stripe": "^13.2.0",
    "uuid": "^9.0.0"
  }
}
```

The package version may vary depending upon the latest release, but if you are having versions above these, you dont need to stress over this.

Let's understand why exactly do we require these packages.
- Cors - used for cross origin resource sharing with which a front-end client can make requests for resources to an external back-end server. The single-origin policy does not allow cross-origin requests and CORS headers are required to bypass this feature. To learn more about this, you can head over [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

- Express - additional package built on top of node which makes our life easier. Listening to the server. To deep dive into Expressjs, you can also recommend the [documentation](https://expressjs.com/en/starter/installing.html) or this [blog](https://vegibit.com/node-js-blog-tutorial/).

- Stripe - for Stripe Payment integration. Refer [docs](https://stripe.com/docs) for more info.

- uuid - It is used for generating a unique id for each request, so that we can ensure for every transaction request we are generating a payment flow.

- nodemon - It is a package which re-spins the server if any changes are made to the project and saved. Not a required package but it makes our life easier. You can install this package as a dev dependecy also if you dont want this to publish in the production. Here's how you can do this - run the `npm i --save-dev nodemon`.

- dotenv - This package helps us to configure and use env variables inside our project to safeguard our private keys and values.


Now once the Basic setup is clear, you just wanna change a script in `package.json` file and we will good to go.

You  wanna delete this **script** 

```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

and add the following **script** in the `package.json` file

```js
"scripts": {
    "start": "nodemon index.js"
  },
```

Well Kudos! You successfully created the backend setup for this project. Give yourself a pat on the back, and lets move forward with the backend logic.

## 🧠 Backend Logic

Once the basic setup is done, now we wanna setup routes and logic for the backend. Moving on with the basic setup for `index.js` file : 

Note : you can call this whatever you want. Most prefer this to call `server.js`, but you can call this anything.

```js
const cors = require("cors");
const express = require("express");

// TODO: Add the pub key to configure the stripe
const stripe = require("stripe")("");
const { v4: uuidv4 } = require("uuid");

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("IT WORKS...");
});

//Listen
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

Here we initialised the cors, express, uuid and stripe. Then we setup a middleware `app.use(cors())` for cross-origin resource sharing. Then we setup a basic get route to home screen and we send the response **IT WORKS** which is then displayed on the home page of the PORT 5000.

We cheated our way to send the response using `res.send()`, which we ideally don't use. Instead you could also send a proper response something like this :

```js
app.get("/" , (req, res) => {
  res.status(200).json({success : true, msg: "IT WORKS"});
})
```


```js
// index.js

const cors = require("cors");
const express = require("express");

// TODO: Add the pub key to configure the stripe
const stripe = require("stripe")("");
const { v4: uuidv4 } = require("uuid");

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("IT WORKS...");
});

//Listen
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

This will spin up the server, open up the console and if you can see `Server is running on  port 5000` , go to `http://localhost:5000/` and if you see **IT WORKS** displayed on the screen, well you did it, You created a basic route in Express. If in case you are getting any errors, please troubleshoot. Make sure you are in the backend dir when you run `npm start`.

