var express = require("express"),
    router = express.Router();

router.use("/userapi", require("../controllers/user.api.js"));

module.exports = router;