import NextAuth, {AuthOptions, DefaultSession, DefaultUser} from "next-auth"
import { JWT } from "next-auth/jwt"
import AzureADProvider from "next-auth/providers/azure-ad";
import jwt from "jsonwebtoken";

declare module 'next-auth' {
  interface Session extends DefaultSession {
    employeeId: string | null;
  }
}

// Extend the built-in session and user types
export const authOptions : AuthOptions = {
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID || '',
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET || '',
      tenantId: process.env.AZURE_AD_TENANT_ID,
    }),
  ],
  callbacks: {
    async jwt({ token, account}: { token: JWT; account: any; profile?: any }) {
      if (account && account.id_token) {
        // Decode the id_token to get the claims
        const id_token = jwt.decode(account.id_token) as { [key: string]: any };
        const employeeId = id_token?.employeeId;
        token.employeeId = null;
        if (employeeId)
          token.employeeId = employeeId;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: JWT }) {
      session.employeeId = null;
      if (token && token.employeeId)
        session.employeeId = token.employeeId;
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }