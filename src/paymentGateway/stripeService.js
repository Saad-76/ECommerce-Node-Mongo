// const stripe = require("stripe")(
//   "sk_test_51KJYStK0J1d8l3TW5HUHXGLw1VJ3vxifwAFcPM0oCQLFHtNCJgcmoPAGQCGlmydxtn0CqguBaSy0Q4KVkzjblNPn0038mRYmVA"
// );

const stripe = require("stripe")("your_secret_key");

const stripeCardService = async (token, amount) => {
  try {
    const charge = await stripe.charges.create({
      source: token.id,
      amount,
      currency: "usd",
    });
    console.log(charge, "charges are here");
    return {
      status: 200,
      success: true,
      message: "Payment successful",
      response: charge,
    };
  } catch (error) {
    return { status: 500, message: "Internal Server Error" };
  }
};

const paymentIntentService = async (amount, currency, paymentMethodType) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method_types: [paymentMethodType],
    });
    return {
      status: 200,
      response: { clientSecret: paymentIntent.client_secret },
    };
  } catch (err) {
    return { status: 500, message: "Internal Server Error" };
  }
};

module.exports = {
  paymentIntentService,
  stripeCardService,
};
