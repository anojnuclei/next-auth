import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export default async function HomePage() {
  const session = await getServerSession(options);

  return <>{session ? `hello ${session.user?.name}` : "You shall not pass!"}</>;
}
