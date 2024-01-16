import NextAuth from 'next-auth';
import Providers from '..auth/Providers';

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Ajoutez d'autres fournisseurs d'authentification selon vos besoins
  ],
  // Ajoutez d'autres configurations selon vos besoins
});