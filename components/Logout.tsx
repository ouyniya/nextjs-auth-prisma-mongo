"use client";

import { logOut } from "@/actions/auth";

const Logout = () => {
  return (
    <div onClick={() => logOut()} className="hover:cursor-pointer hover:bg-red-200 rounded-lg bg-red-100 px-4 py-2 duration-300">
      <div className="text-red-600">Logout</div>
    </div>
  );
};
export default Logout;
