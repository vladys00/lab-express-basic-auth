module.exports.isAdmin = (req, res, next) => {
    if (req.currentUser.isAdmin) {
      next();
    } else {
      res.render("error", {
        error: "No eres admin",
      });
    }
  };