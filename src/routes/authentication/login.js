import express from "express";
import googlePassport from "../../controllers/passportGoogle.js";

const router = express.Router();

const checkPassword = (req, res, next) => {
  if (req.isAuthenticated() && !req.user.password) {
    return res.redirect("/auth/login/create-password");
  }

  return next();
};

//Utiliza o arquivo de visualização, para a página de login
router.get("/", (req, res) => {
  res.render("login");
});

router.get(
  "/google",
  googlePassport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  googlePassport.authenticate("google", { failureRedirect: "/" }),
  checkPassword,
  function (req, res) {
    res.redirect("/page/home-bolsistas");
  }
);

router.post("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

export default router;
