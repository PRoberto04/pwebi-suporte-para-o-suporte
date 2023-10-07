import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import User from '../models/user-model.js'; 

passport.use(new LocalStrategy({
    usernameField: 'email'
  },
  async (email, password, done) => {
    try {
      const foundUser = await User.findOne({ email: email });
      if (!foundUser) {
        return done(null, false);
      }
      if (!foundUser.verifyPassword(password)) {
        return done(null, false);
      }
      return done(null, foundUser);
    } catch (err) {
      return done(err);
    }
  }
));

passport.serializeUser(function(user, done) {
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
