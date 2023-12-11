import express from "express";
import localPassport from "../../controllers/passportLocal.js";
import googlePassport from "../../controllers/passportGoogle.js";

const router = express.Router();

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
  function (req, res) {
    res.redirect("/page/home-bolsistas");
  }
);

router.post("/password",
localPassport.authenticate("local", {
    successRedirect: "/page/home-bolsistas",
    failureRedirect: "/auth/login",
    failureMessage: true,
  })
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
