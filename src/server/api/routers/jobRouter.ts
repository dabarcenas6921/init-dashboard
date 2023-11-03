import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

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

type JobPostingType = z.infer<typeof JobData>;

// Define the input schema for the filtering procedure
const FilterInput = z.object({
  jobType: z.array(z.string()).optional(),
  jobPosition: z.array(z.string()).optional(),
  jobLocation: z.array(z.string()).optional(),
});


// Define the output schema for the filtered job postings
const FilteredJobPostings = z.array(JobData);

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
      }),
    )
    .query(async ({ input, ctx }) => {
      try {
        const decodedQuery = input.q.replace(/\+/g, ' ').replace(/%20/g, ' ');

        const jobPostings = await ctx.db.jobPosting.findMany({
          where: {
            OR: [
              { title: { contains: decodedQuery.toLowerCase() } },
              { company: { contains: decodedQuery.toLowerCase() } },
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
        console.log("input.jobType:", input.jobType);
        console.log("input.jobPosition:", input.jobPosition);
        console.log("input.jobLocation:", input.jobLocation);
        if (input.jobType?.length === 0 && input.jobPosition?.length === 0 && input.jobLocation?.length === 0) {
          // If no filters are provided, return all job postings
          const jobPostings = await ctx.db.jobPosting.findMany();
          console.log("YOOOOO")
          return jobPostings;
        }

        const jobPostings: JobPostingType[] = []; // Initialize an array to collect job postings
        if (input.jobType) {
          
          for (const type of input.jobType) {
            const postingsOfType = await ctx.db.jobPosting.findMany({
              where: {
                jobType: {
                  contains: type 
                }
              }
            });
            jobPostings.push(...postingsOfType);
          }
  
        }
        if (input.jobPosition) {
          console.log(input.jobPosition)
          for (let pos of input.jobPosition) {
            if (pos === "newGrad") {
              pos = "New-grad"
            }
            const postingsOfType = await ctx.db.jobPosting.findMany({
              where: {
                jobPosition: {
                  contains: pos
                }
              }
            });
            jobPostings.push(...postingsOfType);
          }
      
        } 

        if (input.jobLocation) {
          console.log(input.jobLocation)
          for (let loc of input.jobLocation) {
            if (loc === "onSite") {
              loc = "On-site"
            }
            const postingsOfType = await ctx.db.jobPosting.findMany({
              where: {
                jobLocation: {
                  contains: loc
                }
              }
            });
            jobPostings.push(...postingsOfType);
          }
      
        }
       
        return jobPostings;

      } catch (error) {
        console.log(error);
        throw new Error("Failed to filter job postings");
      }
    }),
  



  // Delete Job Posting Procedure
  delete: publicProcedure
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
