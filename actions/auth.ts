"use server"

import { signIn, signOut } from "@/auth"; // <-- Import from your server config
import { revalidatePath } from "next/cache";

export const login = async (provider: string) => {
  await signIn(provider, { redirectTo: "/" });
  revalidatePath("/");
};

export const logOut = async () => {
  await signOut({ redirectTo: "/" });
  revalidatePath("/");
};
