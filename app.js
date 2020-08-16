const express = require("express");
const app = express();

const mongoose = require("mongoose");

const config = require("config");
const PORT = config.get("port") || 5000;

app.use(express.json({ extended: true }));

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/link", require("./routes/link.routes"));
app.use("/to", require("./routes/redirect.routes"));

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => {
      console.log(`Server has been started on port ${PORT}...`);
    });
  } catch (e) {
    console.log("Server error:", e);
    process.exit(1);
  }
}

start();
