import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import {websocketRouter} from "./routers/websocket";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  websocket: websocketRouter,

});

// export type definition of API
export type AppRouter = typeof appRouter;
