import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
  // "/" will be accessible to all users
  publicRoutes: ["/", "/sign-in", "/sign-up", "/events", "/about", "/jobs"],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).)", "/", "/(api|trpc)(.)"],
};
