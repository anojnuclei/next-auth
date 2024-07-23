import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const ServerPage = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("api/auth/signin?callbackUrl=/server"); // after we logged in we are navigate to same page again
  }
  return <section>server page</section>;
};

export default ServerPage;
