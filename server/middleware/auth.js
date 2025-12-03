// middleware to verify the user
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.headers.token;
    // decoding token to get the userId
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) return res.json({ success: false, message: "User Not found" });

    req.user = user; // adding the user details to the request to access it in the usercontrollers
    next();
  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: error.message });
  }
};
