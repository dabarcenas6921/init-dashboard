import { eventRouter } from "~/server/api/routers/eventRouter";
import { createTRPCRouter } from "~/server/api/trpc";
import { jobRouter } from "./routers/jobRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  events: eventRouter,
  jobs: jobRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
