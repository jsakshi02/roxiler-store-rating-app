const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const {
  validateEmail,
  validatePassword,
  validateName,
  validateAddress,
} = require("../utils/validators");

// REGISTER USER
const register = async (req, res) => {
  try {
    const { name, email, password, address, role } = req.body;

    if (!name || !email || !password || !address) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!validateName(name)) {
      return res.status(400).json({ message: "Name must be between 20 and 60 characters" });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }

    if (!validatePassword(password)) {
      return res.status(400).json({ message: "Password must contain uppercase letter and special character" });
    }

    if (!validateAddress(address)) {
      return res.status(400).json({ message: "Address cannot exceed 400 characters" });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash password AFTER validation
    const hashedPassword = await bcrypt.hash(password, 10);

    // Validate role
    const validRoles = ["ADMIN", "USER", "STORE_OWNER"];
    const userRole = validRoles.includes(role) ? role : "USER";

    // Create user with correct role
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      address,
      role: userRole,
    });

    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// LOGIN USER
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      token,
      role: user.role,
      name: user.name,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  register,
  login,
};