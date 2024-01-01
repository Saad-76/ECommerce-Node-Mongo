const { paymentIntentService, stripeCardService } = require("./stripeService");

const createPaymentIntent = async (req, res) => {
  const { amount, currency, paymentMethodType } = req.body;

  const payment = await paymentIntentService(
    amount,
    currency,
    paymentMethodType
  );
  res.status(payment.status).send(payment);
};

const stripeCardController = async (req, res) => {
  const { token, amount } = req.body;

  const response = await stripeCardService(token, amount);
  res.send(response.status).send(response);
};

module.exports = {
  createPaymentIntent,
  stripeCardController,
};
