import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import userModel from "../models/user-model.js";

passport.use(new LocalStrategy({usernameField: 'email'},
    async(email, passport, done) => {
        try{
            const foundUser = await userModel.findOne({email: email});
            if(!foundUser){return done(null, false)};

            const isPasswordValid = await foundUser.verifyPassword(password);
            if(!isPasswordValid){return done(null, false)};
            
            return done(null, foundUser);
        } catch(error){
            return done(error);
        }
    }
));

passport.serializeUser(function(userModel, cb){
    process.nextTick(function() {
        cb(null, { id: userModel.id, username: userModel.username});
    });
});

passport.deserializeUser(function(user, cb){
    process.nextTick(function(user, cb) {
        return cb(null, user);
    });
});

export default passport;