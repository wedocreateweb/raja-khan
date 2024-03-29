const functions = require("firebase-functions");
const express = require("express") 
const cors = require("cors") 
const bodyParser = require("body-parser")
const path = require("path") 

if (process.env.NODE_ENV != "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
// const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
  });
}
app.use(express.static(path.join(__dirname, "../client/dist")));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
})
// app.listen(port, (error) => {
//   if (error) throw error;
//   console.log("Server running on port " + port);
// });

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

exports.app = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
