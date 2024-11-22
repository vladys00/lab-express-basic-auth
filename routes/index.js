const router = require("express").Router();
const authControllers = require('../controllers/auth.controllers')

/* GET home page */
router.get("/register", authControllers.register);
router.post("/register", authControllers.doRegister);

router.get("/login", authControllers.login);
router.post("/login",authControllers.doLogin );

router.get("/login-page", authControllers.loggedIn)

module.exports = router;
