import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

const EventData = z.object({
  name: z.string(),
  description: z.string(),
  time: z.date(),
  location: z.string(),
  picture: z.string(),
  program: z.string(),
  rsvpLink: z.string(),
});

export type EventType = z.infer<typeof EventData>;

export const eventRouter = createTRPCRouter({
  //Protect this route once user authentication is completed
  create: protectedProcedure
    .input(EventData)
    .mutation(async ({ input, ctx }) => {
      try {
        const event = await ctx.db.event.create({
          data: input,
        });

        return event;
      } catch (error) {
        console.log(error);
        throw new Error("Failed to create event");
      }
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      const events = await ctx.db.event.findMany();
      return events;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to get events");
    }
  }),

  getByQuery: publicProcedure
    .input(
      z.object({
        q: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      try {
        const decodedQuery = input.q.replace(/\+/g, " ").replace(/%20/g, " ");

        const events = await ctx.db.event.findMany({
          where: {
            OR: [
              { name: { contains: decodedQuery.toLowerCase() } },
              { program: { contains: decodedQuery.toLowerCase() } },
            ],
          },
        });
        return events;
      } catch (error) {
        console.log(error);
        throw new Error("Failed to get events by query");
      }
    }),

  delete: protectedProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      try {
        const event = await ctx.db.event.delete({
          where: { id: input.id },
        });
        return event;
      } catch (error) {
        console.log(error);
        throw new Error("Failed to delete event");
      }
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string().optional(),
        description: z.string().optional(),
        time: z.date().optional(),
        location: z.string().optional(),
        picture: z.string().optional(),
        program: z.string().optional(),
        rsvpLink: z.string().optional(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      try {
        const event = await ctx.db.event.update({
          where: { id: input.id },
          data: {
            name: input.name,
            description: input.description,
            time: input.time,
            location: input.location,
            picture: input.picture,
            program: input.program,
            rsvpLink: input.rsvpLink,
          },
        });
        return event;
      } catch (error) {
        console.log(error);
        throw new Error("Failed to update event");
      }
    }),
});
