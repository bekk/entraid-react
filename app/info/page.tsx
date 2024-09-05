'use client'

import {useSession} from "next-auth/react";

export default function Info() {
  const session = useSession()
  console.log('gettin that session in a client component', session)
  return (
    <div>
      <h1>
        INFO
      </h1>
    </div>
  );
}