'use client'

import {useSession} from "next-auth/react";
import {Session} from "next-auth";

export default function Info() {
  const { data } = useSession()
  console.log('gettin that session in a client component', data?.employeeId)
  return (
    <div>
      <h1>
        INFO
      </h1>
    </div>
  );
}