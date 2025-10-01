"use client"

import LoginGitHub from "@/components/LoginGitHub";

const SignIn = () => {
  return (
    <div className="w-full flex mt-25 justify-center items-center">
      <section className="flex flex-col gap-4 justify-center items-center">
        <h1 className="font-semibold text-2xl">Sign in</h1>
        {/* login form */}
        <LoginGitHub />
      </section>
    </div>
  );
};
export default SignIn;
