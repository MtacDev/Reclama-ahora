import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import config from '@/lib/config/auth';
import Google from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

import getPrismaClient from '../init/prisma';

export const {
  handlers: { GET, POST },
  auth
} = NextAuth({


  providers: [
    Google({
      id: 'google',
      name: 'Google',
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
      id: 'password',
      name: 'Credentials',
      async authorize(credentials) {
        const { email, password } = credentials as { email: string; password: string };
        console.log('credentials', credentials);
        const prisma = getPrismaClient();
        const user = await prisma.user.findUnique({
          where: { email },
          select: {
            id: true,
            email: true,
            name: true,
            password: true,
          },
        });
        if (!user || !('password' in user)) {
          throw new Error('InvalidCredentials');
        }
        const bcrypt = require('bcryptjs');
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) throw new Error('InvalidCredentials');
        return {
          id: user.id,
          email: user.email,
          name: user.name
        };
      }
    })
  ],
  adapter: PrismaAdapter(getPrismaClient()),
  session: { strategy: 'database' },
  pages: {
    signIn: config.redirects.toLogin,
    error: config.redirects.toLogin,
  },
  debug: true,
  callbacks: {
    async session({ session, user }) {
      if (user || session) {
        session.user.id = user.id;
        return session;
      }

      throw 'User Not Found';
    },
  }
});
