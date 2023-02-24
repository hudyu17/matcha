import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    // LinkedInProvider({
    //     clientId: process.env.LINKEDIN_CLIENT_ID,
    //     clientSecret: process.env.LINKEDIN_CLIENT_SECRET
    //   }),
  ],
}

export default NextAuth(authOptions)