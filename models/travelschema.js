const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const keysecret = "kuchbhikuchbhikuchbhikuchbhikuch";
// name, startlocation, endlocation, date, carname, carnumber
const travelSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  startlocation: {
    type: String,
    required: true,
  },
  endlocation: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  carname: {
    type: String,
    required: true,
  },
  carnumber: {
    type: String,
    required: true,
  },
  //   tokens: [
  //     {
  //       token: {
  //         type: String,
  //         required: true,
  //       },
  //     },
  //   ],
  //   verifytoken: {
  //     type: String,
  //   },
});

// signUpSchema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     this.password = await bcrypt.hash(this.password, 12);
//   }
//   next();
// });

// signUpSchema.methods.generateAuthtoken = async function () {
//   try {
//     const token1 = jwt.sign({ _id: this._id }, keysecret, {
//       expiresIn: "1h",
//     });
//     this.tokens = this.tokens.concat({ token: token1 });
//     await this.save();
//     return token1;
//   } catch (error) {
//     res.status(404).json({ error: "some errors are there" });
//   }
// };

const travels = mongoose.model("travels", travelSchema);

module.exports = travels;
