import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

const page = async () => {
  const session = await getServerSession(options);
  return (
    <>
      {session ? (
        <h1>{`Hello ${session.user?.name}`}</h1>
      ) : (
        <h1>Unauthorized</h1>
      )}
    </>
  );
};

export default page;
