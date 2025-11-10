"use client";

import { login } from "@/actions/auth";

const LoginFacebook = () => {
  return (
    <div
      onClick={() => login("facebook")}
      className="flex gap-2 text-white 
      w-full justify-center items-center 
      bg-blue-500 duration-300 hover:bg-blue-600 hover:shadow-sm px-4 py-2 border border-gray-200 rounded-lg hover:cursor-pointer"
    >
      <div className="w-5">
        <svg fill="#FFF" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1168.737 487.897c44.672-41.401 113.824-36.889 118.9-36.663l289.354-.113 6.317-417.504L1539.65 22.9C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l62.045-451.233H1126.66v-69.152c0-54.937 14.214-96.112 42.078-122.058" fill-rule="evenodd"></path> </g></svg>
      </div>
      <p>Login with Facebook</p>
    </div>
  );
};
export default LoginFacebook;
