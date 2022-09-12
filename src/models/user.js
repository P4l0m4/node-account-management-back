const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email invalid");
      }
    },
  },
  password: {
    type: String,
    validate(value) {
      if (value.includes("password")) {
        throw new Error("Password cannot contain password");
      }
    },
    required: true,
    trim: true,
    minlength: 7,
  },
});

module.exports = User;
