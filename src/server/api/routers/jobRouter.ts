import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

const JobData = z.object({
  image: z.string(),
  title: z.string(),
  company: z.string(),
  jobType: z.string(),
  jobPosition: z.string(),
  jobLocation: z.string(),
  date: z.string(),
  url: z.string(),
});

const JobCardType = z.object({
  id: z.number(),
  image: z.string(),
  title: z.string(),
  company: z.string(),
  jobType: z.string(),
  jobPosition: z.string(),
  jobLocation: z.string(),
  date: z.string(),
  url: z.string(),
});

export type JobPostingType = z.infer<typeof JobCardType>;

// Define the input schema for the filtering procedure
const FilterInput = z.object({
  jobType: z.array(z.string()).optional(),
  jobPosition: z.array(z.string()).optional(),
  jobLocation: z.array(z.string()).optional(),
});

export const jobRouter = createTRPCRouter({
  // Create Job Procedure
  create: protectedProcedure.input(JobData).mutation(async ({ input, ctx }) => {
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
      }),
    )
    .query(async ({ input, ctx }) => {
      try {
        const decodedQuery = input.q.replace(/\+/g, " ").replace(/%20/g, " ");

        const jobPostings = await ctx.db.jobPosting.findMany({
          where: {
            OR: [
              { title: { contains: decodedQuery, mode: "insensitive" } },
              { company: { contains: decodedQuery, mode: "insensitive" } },
            ],
          },
        });
        return jobPostings;
      } catch (error) {
        console.log(error);
        throw new Error("Failed to get job postings by query");
      }
    }),

  filterBySelectedFilters: publicProcedure
    .input(FilterInput)
    .query(async ({ input, ctx }) => {
      try {
        if (
          input.jobType?.length === 0 &&
          input.jobPosition?.length === 0 &&
          input.jobLocation?.length === 0
        ) {
          // If no filters are provided, return all job postings
          const jobPostings = await ctx.db.jobPosting.findMany();
          return jobPostings;
        }

        const jobPostings: JobPostingType[] = []; // Initialize an array to collect job postings
        const addedJobPostingIds = new Set<number>(); // Initialize a set to store added job posting IDs
        if (input.jobType) {
          for (const type of input.jobType) {
            const postingsOfType = await ctx.db.jobPosting.findMany({
              where: {
                jobType: {
                  contains: type,
                  mode: "insensitive"
                },
              },
            });

            postingsOfType.forEach((post) => {
              // Check if the job posting's ID is in the set of added IDs
              if (!addedJobPostingIds.has(post.id)) {
                // If not, add the job posting to the array and set
                jobPostings.push(post);
                addedJobPostingIds.add(post.id);
              }
            });
          }
        }
        if (input.jobPosition) {
          console.log(input.jobPosition);
          for (let pos of input.jobPosition) {
            if (pos === "newGrad") {
              pos = "New-Grad";
            }
            const postingsOfType = await ctx.db.jobPosting.findMany({
              where: {
                jobPosition: {
                  contains: pos,
                  mode: "insensitive"
                },
              },
            });

            postingsOfType.forEach((post) => {
              // Check if the job posting's ID is in the set of added IDs
              if (!addedJobPostingIds.has(post.id)) {
                // If not, add the job posting to the array and set
                jobPostings.push(post);
                addedJobPostingIds.add(post.id);
              }
            });
          }
        }

        if (input.jobLocation) {
          console.log(input.jobLocation);
          for (let loc of input.jobLocation) {
            if (loc === "onSite") {
              loc = "On-Site";
            }
            const postingsOfType = await ctx.db.jobPosting.findMany({
              where: {
                jobLocation: {
                  contains: loc,
                  mode: "insensitive"
                },
              },
            });

            postingsOfType.forEach((post) => {
              // Check if the job posting's ID is in the set of added IDs
              if (!addedJobPostingIds.has(post.id)) {
                // If not, add the job posting to the array and set
                jobPostings.push(post);
                addedJobPostingIds.add(post.id);
              }
            });
          }
        }

        return jobPostings;
      } catch (error) {
        console.log(error);
        throw new Error("Failed to filter job postings");
      }
    }),

  // Delete Job Posting Procedure
  delete: protectedProcedure
    .input(
      z.object({
        id: z.number(),
      }),
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
  update: protectedProcedure
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
      }),
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
