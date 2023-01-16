const UserModel = require("../models/UserModel");
const JWT = require("jsonwebtoken");
const secret = "Venine-User-Management-System";

const login = async (req, res) => {
  const { empid, password } = req.body;
  const user = await UserModel.findOne({
    where: {
      emp_id: empid,
      password: password,
    },
  });
  // console.log(user);
  if (user) {
    const token = JWT.sign({ user }, secret, { expiresIn: "1h" });
    res.status(200).json({
      message: "Login Success",
      token,
      user,
      status: 200,
    });
  } else {
    console.log("Login Failed")
    res.json({ message: "Login Failed", status: 500 })
  }
};

const authen = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.json({ auth: false, message: "No token provided" });
    }
    const decoded = JWT.verify(token, secret);
    const user = await UserModel.findOne({
      where: {
        emp_id: decoded.user.emp_id,
      },
    });
    console.log(user);
    if (!user) {
      return res.json({ status: 500, auth: false, message: "No user found" });
    }
    res.json({ status: 200, auth: true, user: user });
  } catch (error) {
    res.json({ status: 500, auth: false, message: "No user found" });
    console.log({ message: error.message });
  }
};

module.exports = {
  login,
  authen,
};
