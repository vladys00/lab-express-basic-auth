const router = require("express").Router();
const authControllers = require('../controllers/auth.controllers')
const authMiddleware = require('../middleware/auth.middleware')

/* GET home page */
router.get("/register", authControllers.register);
router.post("/register", authControllers.doRegister);

router.get("/login", authMiddleware.isNotAuthenticated, authControllers.login);
router.post("/login",authMiddleware.isNotAuthenticated, authControllers.doLogin );

router.get("/profile", authControllers.loggedIn);

router.get("/logout", authControllers.logout);

module.exports = router;
