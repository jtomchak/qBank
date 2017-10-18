var router = require("express").Router();
const passport = require("passport");

const Authentication = require("../controllers/authentication");
const passportService = require("../passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

/* GET auth root, super secret */
router.get("/", requireAuth, function(req, res, next) {
  res.send({ message: "Super secret code is ABC123" });
});

/* POST login */
router.post("/signup", Authentication.signup);
router.post("/signin", requireSignin, Authentication.signin);

module.exports = router;
