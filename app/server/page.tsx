import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Server = async () => {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }

  return (
    <div className="flex h-full items-center justify-start mt-25 flex-col gap-4">
      <h1 className="font-semibold text-xl">Secret Page</h1>
      <p>{session?.user?.email}</p>
    </div>
  );
};
export default Server;
