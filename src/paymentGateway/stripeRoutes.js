const express = require("express");
const {
  createPaymentIntent,
  stripeCardController,
} = require("./stripeController");

const router = express.Router();

router.post("/create-payment-intent", createPaymentIntent);
router.post("/charge", stripeCardController);

module.exports = router;
