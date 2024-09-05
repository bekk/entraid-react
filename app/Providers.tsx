'use client'
import {getSession, SessionProvider, useSession} from "next-auth/react"
import {FC, PropsWithChildren} from "react";
import {Session} from "next-auth";
import {redirect} from "next/navigation";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";


export const Providers: FC<PropsWithChildren<{ session: Session | null | undefined }>> = ({children, session}) => {
  if (!session?.employeeId) {
    redirect('/api/auth/signin');
  }
  return (
      // <>{children}</>
    <SessionProvider session={session} refetchInterval={0}>
      {children}
    </SessionProvider>
  )
}