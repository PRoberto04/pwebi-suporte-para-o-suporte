import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import User from '../models/user-model.js';

//Lógica referente à estratégia local de autenticação, usando o Passport.js

passport.use(
    new LocalStrategy({
        usernameField: 'email' 
        //A estratégia local do Passport utiliza de nome de usuário e senha para a autentiação.
        //Como o email é o único valor "único", ao invés o nome, quero que autentique o usuário usando o email
        //Por també utilizar da senha para verificação, não é necessário alterar nada. 
    },
    async (email, password, done) => {
        try {
            const foundUser = await User.findOne({ email: email});
            if (!foundUser) {
                return done(null, false);
            }
            if (!foundUser.verifyPassword(password)) {
                return done(null, false);
            }
            return done(nulll, foundUser);
        } catch (err) {
            return done(err);
        }
    }
    
    )
);

passport.serializeUser(function(user, done){
    done(null, user.id)
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