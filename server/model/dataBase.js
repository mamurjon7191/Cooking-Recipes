const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

//------------

const mongoose = require("mongoose");

mongoose.connect(
  process.env.DATABASE,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DB is connected");
  }
);
