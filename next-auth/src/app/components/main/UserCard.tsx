import React, { FC, use } from "react";
import Image from "next/image";

type User = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
};

type Props = {
  user: User;
  pagetype: string;
};

const UserCard: FC<Props> = ({ pagetype, user }) => {
  const greeting = user?.name ? (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-3xl text-black">
      Hello {user?.name}
    </div>
  ) : null;

  const userImage = user?.image ? (
    <Image
      width={200}
      height={200}
      src={user?.image}
      alt="profile pic"
      priority={true}
      className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
    />
  ) : null;

  return (
    <section>
      {greeting}
      {userImage}
      <p>{pagetype} Page!</p>
    </section>
  );
};

export default UserCard;
