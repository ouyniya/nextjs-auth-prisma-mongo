"use client";

import LoginFacebook from "@/components/LoginFacebook";
// import LoginForm from "@/components/LoginForm";
import LoginGitHub from "@/components/LoginGitHub";
import LoginGoogle from "@/components/LoginGoogle";
import Image from "next/image";
// import Facebook from "next-auth/providers/facebook";

const SignIn = () => {
  return (
    <div className="w-full flex justify-center items-center mt-25">
      <section className="flex flex-col gap-4 justify-center items-center w-full max-w-md">
        <div className="w-full flex flex-col gap-2 mb-4 justify-center mx-auto items-center">
          <Image src="/love-logo.png" width={220} height={220} alt="logo" />
          <h1 className="font-semibold playpen text-2xl mb-4">ลงชื่อเข้าใช้</h1>
          {/* <LoginForm /> */}
        </div>
        <div className="px-4 w-full">
          <LoginGoogle />
        </div>
        {/* <div className="px-4 w-full">
          <LoginFacebook />
        </div> */}
        <div className="px-4 w-full">
          <LoginGitHub />
        </div>
      </section>
    </div>
  );
};
export default SignIn;
