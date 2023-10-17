import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/user-model.js'

passport.use(
  new GoogleStrategy(
    {
      clientID: "67287265811-o5uku308jcfj4j18n48qjvp34uagel34.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3000/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            // Verifique se o usuário já existe no banco de dados com base no profile.id
            let user = await User.findOne({ googleId: profile.id });
    
            if (user) {
              return done(null, user); // Usuário já existe, faça o login
            } else {
              // Se o usuário não existe, crie um novo usuário com base nas informações do Google Profile
              user = await User.create({
                googleId: profile.id,
                displayName: profile.displayName,
                // Outros campos do usuário, se necessário
              });
              return done(null, user);
            }
          } catch (error) {
            return done(error, null);
          }
    }
  )
);
