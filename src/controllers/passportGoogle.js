import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import userModel from "../models/user-model.js";

import dotenv from "dotenv";
dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback"
    },
    async function (acessToken, refreshToken, profile, cb) {
      try {
        let user = await userModel.findOne({ googleId: profile.id });

        if (user) {
          req.login(user, (logiErr) => {
            if (logiErr) {
              console.error("Erro ao realizar login: ", logiErr);
            }
            return res.redirect("/page/home-bolsistas");
          });
        } else {
          
          const existingUser = await userModel.findOne({
            email: profile.emails[0].value,
          });

          if (existingUser) {
            user = existingUser;
          } else{
              user = new userModel({
                googleId: profile.id,
                name: profile.displayName,
                email: profile.emails[0].value,
              });
              await user.save();
          }

          return cb(null, user);
        }
      } catch (error) {
        return cb(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

export default passport;
