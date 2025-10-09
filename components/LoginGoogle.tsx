"use client";

import { login } from "@/actions/auth";

const LoginGoogle = () => {
  return (
    <div
      onClick={() => login("google")}
      className="flex gap-2 
      w-full justify-center items-center
      bg-gray-50 px-4 py-2 border border-gray-200 rounded-lg hover:cursor-pointer"
    >
      <div className="w-5">
        <svg
          fill="#000000"
          height="18px"
          width="18px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 210 210"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40 c-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105 S0,162.897,0,105z"></path>{" "}
          </g>
        </svg>
      </div>
      <p>Login with Google</p>
    </div>
  );
};
export default LoginGoogle;
