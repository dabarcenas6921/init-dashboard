import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const JobData = z.object({
    image:          z.string(),
    title:          z.string(),
    company:        z.string(),
    jobType:        z.string(),
    jobPosition:    z.string(),
    jobLocation:    z.string(),
    date:           z.string(),
    url:            z.string()
});



// Create the jobRouter
export const jobRouter = createTRPCRouter({
    // Create Job Procedure
    create: publicProcedure.input(JobData).mutation(async ({ input, ctx }) => {
      try {
        const jobPosting = await ctx.db.jobPosting.create({
          data: input,
        });
  
        return jobPosting;
      } catch (error) {
        console.log(error);
        throw new Error("Failed to create job posting");
      }
    }),
  
    // Get All Job Postings Procedure
    getAll: publicProcedure.query(async ({ ctx }) => {
      try {
        const jobPostings = await ctx.db.jobPosting.findMany();
        return jobPostings;
      } catch (error) {
        console.log(error);
        throw new Error("Failed to get job postings");
      }
    }),


    // Get Jobs by Query Procedure
    getByQuery: publicProcedure
      .input(
        z.object({
          q: z.string(),
        })
      )
      .query(async ({ input, ctx }) => {
        try {
          const jobPostings = await ctx.db.jobPosting.findMany({
            where: {
              OR: [
                { title: { contains: input.q.toLowerCase() } },
                { company: { contains: input.q.toLowerCase() } },
              ],
            },
          });
          return jobPostings;
        } catch (error) {
          console.log(error);
          throw new Error("Failed to get job postings by query");
        }
      }),

    // Delete Job Posting Procedure
    delete: publicProcedure
      .input(
        z.object({
          id: z.number(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        try {
          const jobPosting = await ctx.db.jobPosting.delete({
            where: { id: input.id },
          });
          return jobPosting;
        } catch (error) {
          console.log(error);
          throw new Error("Failed to delete job posting");
        }
      }),
  
    // Update Job Posting Procedure
    update: publicProcedure
      .input(
        z.object({
          id: z.number(),
          image: z.string().optional(),
          title: z.string().optional(),
          company: z.string().optional(),
          jobType: z.string().optional(),
          jobPosition: z.string().optional(),
          jobLocation: z.string().optional(),
          date: z.string().optional(),
          url: z.string().optional(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        try {
          const jobPosting = await ctx.db.jobPosting.update({
            where: { id: input.id },
            data: {
              image: input.image,
              title: input.title,
              company: input.company,
              jobType: input.jobType,
              jobPosition: input.jobPosition,
              jobLocation: input.jobLocation,
              date: input.date,
              url: input.url,
            },
          });
          return jobPosting;
        } catch (error) {
          console.log(error);
          throw new Error("Failed to update job posting");
        }
      }),
  });

