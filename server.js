const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

app.use(express.json({ extended: true }));
app.use("/api", require("./routes/catalog.route"));

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.lmuvo.mongodb.net/onlineShop?retryWrites=true&w=majority",
    );
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}!`);
    });
  } catch (err) {
    console.error(err);
  }
}

start();
