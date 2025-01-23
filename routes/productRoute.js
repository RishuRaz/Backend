const express = require('express');

const route = express.Router();

router.route("/products").get(getAllProducts);

module.exports = router