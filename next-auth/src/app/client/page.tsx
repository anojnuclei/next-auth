import React from "react";
//use must use an AuthProvider for client components to useSession
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const ClientPage = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/client");
    },
  });
  return <div>ClientPage</div>;
};

export default ClientPage;
