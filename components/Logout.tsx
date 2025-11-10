"use client";

import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

const Logout = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        signOut({ redirect: false }).then(() => {
          router.replace("/"); // ✅ redirect ไป root
        });
      }}
      className="hover:cursor-pointer duration-300"
    >
      <div className="text-rose-800/50 hover:text-rose-200 duration-300">
        Logout
      </div>
    </button>
  );
};
export default Logout;
