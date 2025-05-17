var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

router.post("/api", (req, res, next) => {
  res.json({
    data: "Hello from the API!",
  });
});

module.exports = router;
