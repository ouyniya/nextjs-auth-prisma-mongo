import { auth } from "@/auth";
import Link from "next/link";
import Logout from "./Logout";
import Image from "next/image";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className="w-full flex items-center mx-auto border border-white border-b-gray-300 min-h-[50px] px-12">
      <div className="w-full flex items-center justify-between gap-8">
        <Link href="/" className="hover:text-sky-500">
          <p>Home</p>
        </Link>
        <Link href="/" className="hover:text-sky-500">
          <p>Public</p>
        </Link>
        <Link href="/" className="hover:text-sky-500">
          <p>Secret</p>
        </Link>
        {!session?.user ? (
          <Link
            href="/sign-in"
            className="hover:cursor-pointer hover:bg-emerald-200 rounded-lg bg-emerald-100 px-4 py-2 duration-300"
          >
            <p>Sign in</p>
          </Link>
        ) : (
          <div className="flex gap-4">
            <div className="flex items-center justify-center gap-2 text-sm">
              {session.user.name}
              {session.user.image && (
                <Image
                  className="rounded-full"
                  width={30}
                  height={30}
                  alt="User image"
                  src={session.user.image}
                />
              )}
            </div>
            <Logout />
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
