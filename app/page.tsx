import {Providers} from "@/app/Providers";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <Providers session={session}>
      <main>
        <h1>
          HELLO
        </h1>
      </main>
    </Providers>
  );
}
