const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { user } = require("../Models/userModel");

const createToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_PRIVATE_KEY);
  return token;
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const findUser = await user.findOne({ email });
    if (!findUser)
      return res.json({ secure: false, msg: "User doesn't exist" });
    const isCorrectPassword = await bcrypt.compare(password, findUser.password);
    if (isCorrectPassword) {
      const token = createToken(findUser._id);
      res.json({ secure: true, msg: "Logged in successgfully", token, id: findUser.id});
    }
  } catch (error) {
    console.log(error);
    res.json({ secure: true, msg: '"Failed to logged in' });
  }
};
const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userMember = await user.findOne({ email });
    if (userMember) {
      return res.json({ secure: false, msg: "The user already exist" });
    }
    if (!validator.isEmail(email)) {
      return res.json({ secure: false, msg: "The email is invalid" });
    }
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);
    console.log(encryptedPassword);
    const newUser = await user.create({
      name,
      password: encryptedPassword,
      email,
    });
    if (newUser) {
      const token = createToken(newUser._id);
      console.log(token);
      res.json({ secure: true, msg: "User created successfully", token });
    }
  } catch (error) {
    console.log(error);
    if (error) res.json({ secure: false, msg: "User failed to create" });
  }
};

module.exports = {
  login,
  signUp,
};
