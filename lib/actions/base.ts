// "use server";

// //simple example of protected routes
// export const amIadmin = async () => {
//   const adminSession = await useAdminSession();
//   if (!adminSession) return false

//   return true;
// }

// export const amIuser = async () => {
//   const userSession = await useSession();
//   if (!userSession) return false

//   return true;
// }