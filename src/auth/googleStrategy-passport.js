import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/user-model.js';

//Lógica de autenticação com o google usando o passport

passport.use(
  new GoogleStrategy(
    {
      clientID: '67287265811-p3g1ue77qv3nh3j35joeah3e309nq68j.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({ googleId: profile.id });

        if (existingUser) {
          return done(null, existingUser);
        }

        const newUser = new User({
          googleId: profile.id,
          googleName: profile.displayName
        });

        await newUser.save();

        return done(null, newUser);
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

export default passport;
