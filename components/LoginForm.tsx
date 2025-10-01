"use client";

import { loginWithCredential } from "@/actions/auth";
import AuthSignInButton from "./AuthSignInButton";
import { useState } from "react";

const LoginForm = () => {
  const [error, setError] = useState<string | null>(null);

  async function actionWrapper(formData: FormData) {
    try {
      await loginWithCredential(formData);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else if (typeof err === "string") {
        setError(err);
      } else {
        setError("An unexpected error occurred");
      }
    }
  }

  return (
    <div className="px-4 py-4 border border-white border-b-slate-300">
      <form action={actionWrapper} className="w-full flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <label htmlFor="email" className="w-20">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="px-4 py-2 bg-sky-50 rounded-xl"
            placeholder="email"
          />
        </div>

        <div className="flex items-center gap-4">
          <label htmlFor="password" className="w-20">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="px-4 py-2 bg-sky-50 rounded-xl"
            placeholder="password"
          />
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <div className="w-full flex justify-end items-end">
          <AuthSignInButton />
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
