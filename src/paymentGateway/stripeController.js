const { paymentIntentService } = require("./stripeService");

const createPaymentIntent = async (req, res) => {
  const { amount, currency, paymentMethodType } = req.body;

  const payment = await paymentIntentService(
    amount,
    currency,
    paymentMethodType
  );
  res.status(payment.status).send(payment);
};

module.exports = {
  createPaymentIntent,
};
