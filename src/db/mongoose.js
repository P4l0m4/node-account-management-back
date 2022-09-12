const mongoose = require("mongoose");
// const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/account-api", {
  useNewUrlParser: true,
});

// const me = new User({
//   name: "Lilas",
//   email: "palomahvrd@gmail.com",
//   age: 47,
//   password: "20112000",
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });
