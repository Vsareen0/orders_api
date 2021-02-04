const router = require("express").Router();
const csv = require("csv-parser");
const fs = require("fs");

router.get("/", async (req, res) => {
  const results = [];
  fs.createReadStream("./data/orders_data.csv")
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      res.send(results);
    });
});

module.exports = router;
