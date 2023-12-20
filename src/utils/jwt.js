const jwt = require("jsonwebtoken");

const GenerateToken = async (id) => {
  const jwtToken = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1hr",
  });
  return jwtToken;
};

module.exports = GenerateToken;
