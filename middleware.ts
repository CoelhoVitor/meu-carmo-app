export { default } from "next-auth/middleware";

// export default withAuth({
//   callbacks: {
//     authorized: ({ token }) => !!token
//   },
//   pages: {
//     signIn: "/login",
//     error: "/login?error=true",
//   },
// });

export const config = { matcher: ["/dashboard"] };