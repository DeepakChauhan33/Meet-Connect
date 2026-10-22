const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(

  {
    name: {
      type: String,
      require: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      require: true,
      minlength: 8,
      select : false
    },

    role: {
      type : String,
      enum : ["student", "interviewer"],
      default : "student"
    },

    isActive: { type: Boolean, default: true, },

  },

  {
    timestamps: true
  }
)


const User = mongoose.model("User", userSchema);

module.exports = User;