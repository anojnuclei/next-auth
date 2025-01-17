import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "your-username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        // This is where you need to retrieve  user data from database
        //to verify with credentials
        const user = {
          id: "42",
          name: "Anoj",
          password: "nextauth",
        };

        if (
          credentials?.username == user.name &&
          credentials?.password == user.password
        ) {
          return user;
        }
        return null;
      },
    }),
  ],
};
