import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const EventData = z.object({
  name: z.string(),
  description: z.string(),
  time: z.date(),
  location: z.string(),
  picture: z.string(),
  tag: z.string(),
  rsvpLink: z.string(),
});

export const eventRouter = createTRPCRouter({
  //Protect this route once user authentication is completed
  create: publicProcedure.input(EventData).mutation(async ({ input, ctx }) => {
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

  delete: publicProcedure
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

  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string().optional(),
        description: z.string().optional(),
        time: z.date().optional(),
        location: z.string().optional(),
        picture: z.string().optional(),
        tag: z.string().optional(),
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
            tag: input.tag,
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
