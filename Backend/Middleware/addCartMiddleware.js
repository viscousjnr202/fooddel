const jwt = require("jsonwebtoken");

const addCartMiddleware = (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({ success: false, msg: "User is not authorized" });
    }
    const token_decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    if (token_decoded) {
      req.body.userId = token_decoded.id;
      next();
    } else {
      console.log("error");
      res.json({ success: false, msg: "server error" });
    }
  } catch (error) {
    console.log(error)
  }
};

module.exports = { addCartMiddleware };
