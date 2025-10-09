"use client";

import LoginForm from "@/components/LoginForm";
import LoginGitHub from "@/components/LoginGitHub";
import LoginGoogle from "@/components/LoginGoogle";

const SignIn = () => {
  return (
    <div className="w-full flex mt-25 justify-center items-center">
      <section className="flex flex-col gap-4 justify-center items-center">
        <h1 className="font-semibold text-2xl">Sign in</h1>
        <LoginForm />

        <div className="px-4 w-full">
          <LoginGoogle />
        </div>
        <div className="px-4 w-full">
          <LoginGitHub />
        </div>
      </section>
    </div>
  );
};
export default SignIn;
