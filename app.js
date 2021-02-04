const express = require("express");
const app = express();
const cors = require("cors");
const orders = require("./routes/orders");
app.use(cors());
app.use(express.json());

// Setup routes
app.use("/api/orders", orders);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
