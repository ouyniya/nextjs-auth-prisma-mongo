import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Server = async () => {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }

  return (
    <div className="flex">
      <h1 className="text-xl">Profile</h1>
      <p>{session?.user?.email}</p>
    </div>
  );
};
export default Server;
