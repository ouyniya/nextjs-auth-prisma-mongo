"use client";

import { useSession } from "next-auth/react";
import { Navbar02 } from "./ui/shadcn-io/navbar-02";

const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <div className="fixed w-full z-55">
      <Navbar02
        session={
          session as { user: { name: string; email: string; image: string } }
        }
      />
    </div>
  );
};

export default Navbar;
