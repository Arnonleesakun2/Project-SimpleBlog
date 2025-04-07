import { currentUser } from "@clerk/nextjs/server";

export const getUser = async () => {
  const user = await currentUser();
  if (!user) throw new Error("You must loggnd!!!");
  return user;
};