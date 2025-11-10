"use client";

import LoginFacebook from "@/components/LoginFacebook";
// import LoginForm from "@/components/LoginForm";
import LoginGitHub from "@/components/LoginGitHub";
import LoginGoogle from "@/components/LoginGoogle";
import MemberConsent from "@/components/MemberConsent";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// import Facebook from "next-auth/providers/facebook";

const SignIn = () => {
  const [showConsent, setShowConsent] = useState(false);

  return (
    <div className="w-full flex justify-center items-center text-gray-600 mt-25">
      <MemberConsent visible={showConsent} />
      <section className="flex flex-col gap-4 justify-center items-center w-full max-w-md">
        <div className="w-full flex flex-col gap-2 mb-4 justify-center mx-auto items-center">
          <Image src="/love-logo.png" width={220} height={220} alt="logo" />
          <h1 className="font-semibold playpen text-2xl mb-4">สมัครสมาชิก</h1>
          <p className="text-sm">
            <span>การสมัครใช้บริการนี้ ถือว่าท่านได้อ่าน เข้าใจ และยอมรับ</span>{" "}
            <span
              onClick={() => {
                setShowConsent(false);
                window.location.reload();
              }}
              className="text-rose-300 hover:text-rose-200 hover:cursor-crosshair duration-300"
            >
              ข้อตกลงการใช้บริการและนโยบายความเป็นส่วนตัว
            </span>{" "}
            <span>ทั้งหมดแล้ว</span>
          </p>
        </div>

        {/* <LoginForm /> */}

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
