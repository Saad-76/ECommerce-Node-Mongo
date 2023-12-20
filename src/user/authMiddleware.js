const jwt = require("jsonwebtoken");
const User = require("./userModel");

const protect = async (req, res, next) => {
  let token;

  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];

      if (!token) {
        res.status(401).send("Not authorized, token failed");
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    }
  } catch (error) {
    console.log(error, "Error in auth middle ware");
  }
};

module.exports = protect;
