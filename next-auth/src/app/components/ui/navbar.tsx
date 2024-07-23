import Link from "next/link";
import React from "react";

interface navItems {
  label: string;
  path: string;
}
const navItems: navItems[] = [
  { label: "home", path: "/home" },
  { label: "extra", path: "/extra" },
  { label: "server", path: "/server" },
  { label: "signout", path: "/api/auth/signout" },
];
const Navbar = () => {
  return (
    <div className=" h-12 shadow-sm w-full flex justify-center items-center">
      <ul className="flex gap-2 ">
        {navItems.map((item) => (
          <li className="cursor-pointer">
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
